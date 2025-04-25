const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
require("dotenv").config();

const app = express();
const port = 8080;

app.use(cors()); // Allow frontend to connect (CORS)

const upload = multer({ dest: "uploads/" });

// S3 (R2) Client Config
const s3 = new S3Client({
  region: "us-east-1", // Required fallback for S3-compatible clients
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  forcePathStyle: true, // Required for R2/S3 compatibility
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

// Upload Endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileStream = fs.createReadStream(file.path);
  const key = path.basename(file.originalname); // Use original file name as key

  const uploadParams = {
    Bucket: process.env.R2_BUCKET,
    Key: key,
    Body: fileStream,
  };

  try {
    await s3.send(new PutObjectCommand(uploadParams));
    console.log(`✅ Uploaded: ${file.originalname}`);
    res.json({ status: "uploaded", file: file.originalname });
  } catch (err) {
    console.error("❌ Upload failed:", err);
    res.status(500).send("Upload to R2 failed");
  }
});

app.listen(port, () => {
  console.log(`✅ API server running at http://localhost:${port}`);
});
