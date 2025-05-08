// File: cloudrun-tiler/index.js

import fetch from "node-fetch"; // Make sure node-fetch is installed
import FormData from "form-data"; // Make sure form-data is installed
import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Setup Multer to save file to /tmp
const storage = multer.diskStorage({
  destination: "/tmp",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

app.use(express.json());

// Upload endpoint
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log(`✅ File uploaded: ${req.file.path}`);
  res.json({ message: "Upload success", filename: req.file.filename });
});

// Tiling endpoint - updated to upload directly to Cesium
app.post("/tile", async (req, res) => {
  const { filename } = req.body;

  if (!filename) {
    return res.status(400).json({ error: "Filename is required" });
  }

  const inputPath = `/tmp/${filename}`;

  if (!fs.existsSync(inputPath)) {
    return res.status(404).json({ error: "File not found" });
  }

  console.log(`🚀 Starting upload to Cesium for ${inputPath}`);

  try {
    // Step 1: Create new Cesium asset
    const createAssetResp = await fetch("https://api.cesium.com/v1/assets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CESIUM_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: filename,
        description: "Uploaded from Cloud Run tiler",
        type: "POINT_CLOUD",
      }),
    });

    if (!createAssetResp.ok) {
      const errorData = await createAssetResp.text();
      console.error("❌ Failed to create asset:", errorData);
      return res.status(500).json({ error: "Failed to create asset" });
    }

    const assetData = await createAssetResp.json();
    const { uploadLocation, assetId } = assetData;

    console.log(`✅ Asset created with ID: ${assetId}`);

    // Step 2: Upload file to Cesium's S3
    const form = new FormData();
    for (const [key, value] of Object.entries(uploadLocation.fields)) {
      form.append(key, value);
    }
    form.append("file", fs.createReadStream(inputPath));

    const uploadResp = await fetch(uploadLocation.url, {
      method: "POST",
      body: form,
    });

    if (!uploadResp.ok) {
      const uploadError = await uploadResp.text();
      console.error("❌ Upload failed:", uploadError);
      return res.status(500).json({ error: "Upload to Cesium S3 failed" });
    }

    console.log("✅ Upload to Cesium S3 successful");

    // Step 3: Respond with asset ID
    res.json({ assetId, message: "Upload started, track with assetId" });

  } catch (error) {
    console.error("❌ Error during tiling process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
