// File: api-server/server.js
const dotenv = require("dotenv");
dotenv.config(); // ✅ Local dev only – Cloud Run uses env vars set in settings

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const tilingRoutes = require("./routes/tilingRoutes");
const cesiumRoutes = require("./routes/cesiumRoutes");

const app = express();
const port = process.env.PORT || 8080; // Cloud Run requires 8080


// ✅ Upload temp files to /tmp (Cloud Run allows only this dir for writing)
const upload = multer({ dest: "/tmp/uploads/" });

// ✅ Cloud Run will inject these from settings or CLI flags
console.log("🔧 Loaded environment:");
console.log({
  SUPABASE_URL: process.env.SUPABASE_URL ? "✅" : "❌",
  R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID ? "✅" : "❌",
  CESIUM_ION_ACCESS_TOKEN: process.env.CESIUM_ION_ACCESS_TOKEN ? "✅" : "❌",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const s3 = new S3Client({
  region: "us-east-1",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});

// ✅ Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  const fileStream = fs.createReadStream(file.path);
  const key = path.basename(file.originalname);

  try {
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET,
        Key: key,
        Body: fileStream,
      })
    );
    console.log(`✅ Uploaded: ${file.originalname}`);
    res.json({ status: "uploaded", file: file.originalname });
  } catch (err) {
    console.error("❌ Upload failed:", err);
    res.status(500).send("Upload to R2 failed");
  } finally {
    fs.unlink(file.path, () => {});
  }
});

// ✅ Additional routes
app.use("/tiling", tilingRoutes);
app.use("/api/cesium", cesiumRoutes);

// ✅ Optional health check
app.get("/healthz", (req, res) => res.status(200).send("ok"));

// ✅ Error handling
app.use((err, req, res, next) => {
  console.error("❌ Server error:", err);
  res.status(500).json({ error: "Something went wrong", details: err.message });
});

app.listen(port, () => {
  console.log(`🚀 API server listening on http://localhost:${port}`);
});
