// File: api-server/routes/cesiumRoutes.js
const express = require("express");
const multer = require("multer");
const UploadService = require("../services/uploadService");
const axios = require("axios");

const router = express.Router();
const upload = multer({ dest: "uploads/" });
const uploadService = new UploadService();

// Upload endpoint
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const userId = req.body.userId || "anonymous"; // Optional: you can pass from frontend
    const result = await uploadService.handleUpload(req.file, userId);
    res.json({ assetId: result.assetId });
  } catch (err) {
    console.error("❌ Upload error:", err.message);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Cesium tiling status endpoint
router.get("/status/:assetId", async (req, res) => {
    const { assetId } = req.params;
  
    try {
      const response = await axios.get(
        `https://api.cesium.com/v1/assets/${assetId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.CESIUM_ION_ACCESS_TOKEN}`,
          },
        }
      );
  
      const { status, percentComplete } = response.data;
      res.json({ status, percentComplete });
    } catch (error) {
      console.error("❌ Failed to fetch tiling status:", error.response?.data || error.message);
      res.status(500).json({ error: "Failed to fetch tiling status" });
    }
  });
  

module.exports = router;
