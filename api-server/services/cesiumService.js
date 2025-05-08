// cesiumService.js
const axios = require('axios');

class CesiumService {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.baseUrl = 'https://api.cesium.com/v1';
        this.axios = axios.create({
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        });
    }

    async uploadToIon(filePath, name, description) {
        try {
            // Step 1: Create an upload token
            const { data: uploadToken } = await this.axios.post(`${this.baseUrl}/assets/upload-token`);

            // Step 2: Request S3 upload location
            const { data: uploadLocation } = await this.axios.post(`${this.baseUrl}/assets/upload/location`, {
                uploadToken: uploadToken.uploadToken
            });

            // Step 3: Upload the file to S3
            const formData = new FormData();
            Object.entries(uploadLocation.formFields).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append('file', fs.createReadStream(filePath));

            await axios.post(uploadLocation.url, formData, {
                headers: {
                    ...formData.getHeaders()
                }
            });

            // Step 4: Create the asset
            const { data: asset } = await this.axios.post(`${this.baseUrl}/assets`, {
                name,
                description,
                type: '3D_TILES',
                options: {
                    sourceType: 'POINT_CLOUD',
                    uploadToken: uploadToken.uploadToken
                }
            });

            return asset;
        } catch (error) {
            console.error('Error in Cesium Ion upload:', error);
            throw error;
        }
    }

    async getAssetStatus(assetId) {
        try {
            const { data: asset } = await this.axios.get(`${this.baseUrl}/assets/${assetId}`);
            return asset;
        } catch (error) {
            console.error('Error getting asset status:', error);
            throw error;
        }
    }

    async getTilesetDetails(assetId) {
        try {
            const { data: asset } = await this.axios.get(`${this.baseUrl}/assets/${assetId}`);
            if (asset.type !== '3D_TILES') {
                throw new Error('Asset is not a 3D tileset');
            }
            return {
                ionAssetId: asset.id,
                status: asset.status,
                tilesetUrl: asset.endpoint
            };
        } catch (error) {
            console.error('Error getting tileset details:', error);
            throw error;
        }
    }
}

module.exports = CesiumService;
