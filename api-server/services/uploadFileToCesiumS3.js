// uploadFileToCesiumS3.js
const axios = require("axios");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { Upload } = require("@aws-sdk/lib-storage");

// Create S3 client for R2
const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

async function uploadFileToCesiumS3(r2FileUrl, uploadLocation) {
  const { endpoint, bucket, prefix, accessKey, secretAccessKey, sessionToken } = uploadLocation;

  // 🔥 NEW: Properly parse the key from the public URL
  const url = new URL(r2FileUrl);
  const fileKey = url.pathname.startsWith("/") ? url.pathname.slice(1) : url.pathname;

  if (!fileKey) {
    throw new Error("Could not parse file key from R2 URL.");
  }

  console.log(`📥 Downloading from R2: ${fileKey}`);

  const getObjectCommand = new GetObjectCommand({
    Bucket: process.env.R2_BUCKET,
    Key: fileKey,
  });

  const r2Response = await r2Client.send(getObjectCommand);
  const fileStream = r2Response.Body;

  // Upload to Cesium's temporary S3
  const cesiumClient = new S3Client({
    region: "us-east-1",
    endpoint: endpoint,
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretAccessKey,
      sessionToken: sessionToken,
    },
  });

  console.log(`🚀 Uploading to Cesium: ${prefix}${fileKey.split("/").pop()}`);

  const upload = new Upload({
    client: cesiumClient,
    params: {
      Bucket: bucket,
      Key: `${prefix}${fileKey.split("/").pop()}`, // just the filename, not folder
      Body: fileStream,
    },
  });

  await upload.done();
  console.log("✅ Upload complete.");
}

module.exports = {
  uploadFileToCesiumS3,
};
