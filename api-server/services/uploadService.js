// api-server/services/uploadService.js
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const { NodeHttpHandler } = require('@smithy/node-http-handler');
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');
const https = require('https');
const fs = require('fs');
const path = require('path');

class UploadService {
    constructor() {
        this.r2Client = new S3Client({
            region: 'auto',
            endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY,
                secretAccessKey: process.env.R2_SECRET_KEY
            }
        });

        this.supabase = createClient(
            process.env.SUPABASE_URL,
            process.env.SUPABASE_ANON_KEY
        );
    }

    async uploadToR2(file) {
        const fileStream = fs.createReadStream(file.path);
        const key = `raw/${Date.now()}-${path.basename(file.originalname)}`;

        const uploadParams = {
            Bucket: process.env.R2_BUCKET,
            Key: key,
            Body: fileStream,
            ContentType: 'application/octet-stream'
        };

        await this.r2Client.send(new PutObjectCommand(uploadParams));

        const publicUrl = `https://pub-7b6f9fb00cae4243b38cf6a63b1bfeca.r2.dev/${key}`;
        return { key, publicUrl };
    }

    async createSupabaseRecord(fileName, r2Key, userId) {
        const { data, error } = await this.supabase
            .from('lidar_files')
            .insert([{
                file_name: fileName,
                r2_key: r2Key,
                user_id: userId || 'anonymous',
                status: 'uploaded',
                created_at: new Date().toISOString()
            }])
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async uploadToCesium(r2PublicUrl, name) {
        try {
            const agent = new https.Agent({ rejectUnauthorized: false });

            // Step 1: Create the Cesium asset
            const assetRes = await axios.post(
                'https://api.cesium.com/v1/assets',
                {
                    name,
                    description: 'Uploaded from LiDAR Viewer',
                    type: '3DTILES',
                    options: { sourceType: 'POINT_CLOUD' }
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.CESIUM_ION_ACCESS_TOKEN}`
                    },
                    httpsAgent: agent
                }
            );

            const { uploadLocation, onComplete, assetMetadata } = assetRes.data;
            const { bucket, prefix, accessKey, secretAccessKey, sessionToken, host } = uploadLocation;

            // Step 2: Download file from R2
            const r2FileBuffer = await new Promise((resolve, reject) => {
                https.get(r2PublicUrl, (res) => {
                    const chunks = [];
                    res.on('data', chunk => chunks.push(chunk));
                    res.on('end', () => resolve(Buffer.concat(chunks)));
                    res.on('error', reject);
                });
            });

            // Step 3: Upload to Cesium's temporary S3 bucket
            const endpoint = host ? `https://${host}` : undefined;

            const cesiumS3Client = new S3Client({
                region: 'us-east-1',
                credentials: {
                    accessKeyId: accessKey,
                    secretAccessKey,
                    sessionToken
            },
            endpoint,
            forcePathStyle: true,
            requestHandler: new NodeHttpHandler({
                httpsAgent: new https.Agent({ rejectUnauthorized: false })
            })
            });

            const key = path.posix.join(prefix, path.basename(name));

            console.log("🧩 uploadLocation from Cesium:", uploadLocation);
            console.log("🪣 Uploading to Cesium S3:");
            console.log("  Bucket:", bucket);
            console.log("  Key:", key);
            console.log("  Host:", host);

            const upload = new Upload({
                client: cesiumS3Client,
                params: {
                    Bucket: bucket,
                    Key: key,
                    Body: r2FileBuffer,
                    ContentType: 'application/octet-stream'
                }
            });

            await upload.done();
            console.log('✅ Uploaded file to Cesium S3');

            // Step 4: Notify Cesium to begin tiling
            await axios.post(
                onComplete.url,
                onComplete.fields || {},
                {
                  headers: {
                    Authorization: `Bearer ${process.env.CESIUM_ION_ACCESS_TOKEN}`
                  },
                  httpsAgent: agent
                }
              );
            console.log('✅ Notified Cesium to begin tiling');

            return { id: assetMetadata.id };

        } catch (error) {
            console.error('❌ uploadToCesium failed:', error.response?.data || error.message);
            throw error;
        }
    }

    async updateSupabaseWithCesiumInfo(recordId, cesiumAssetId) {
        const { data, error } = await this.supabase
            .from('lidar_files')
            .update({
                cesium_asset_id: cesiumAssetId,
                status: 'processing'
            })
            .eq('id', recordId)
            .select()
            .single();

        if (error) throw error;
        return data;
    }

    async handleUpload(file, userId) {
        try {
            console.log('🚀 Upload workflow started...');

            const { key, publicUrl } = await this.uploadToR2(file);
            console.log('✅ Uploaded to R2 at:', key);

            const record = await this.createSupabaseRecord(file.originalname, key, userId);
            console.log('✅ Created Supabase record:', record.id);

            const cesiumAsset = await this.uploadToCesium(publicUrl, file.originalname);
            console.log('✅ Started Cesium tiling with asset ID:', cesiumAsset.id);

            const updatedRecord = await this.updateSupabaseWithCesiumInfo(record.id, cesiumAsset.id);
            console.log('✅ Updated Supabase record with Cesium asset ID:', updatedRecord.id);

            return {
                success: true,
                record: updatedRecord,
                assetId: cesiumAsset.id
            };

        } catch (error) {
            console.error('❌ Upload workflow error:', error.stack || error);
            throw error;
        } finally {
            fs.unlink(file.path, (err) => {
                if (err) console.error('Error cleaning up temp file:', err);
            });
        }
    }
}

module.exports = UploadService;