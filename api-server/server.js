//api-server/server.js
const dotenv = require("dotenv");
dotenv.config(); // <<< FIRST!

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// NEW: Import tilingRoutes
const tilingRoutes = require("./routes/tilingRoutes");
const cesiumRoutes = require('./routes/cesiumRoutes');

// Load environment variables
dotenv.config();
console.log('Environment variables loaded:', {
    SUPABASE_URL: process.env.SUPABASE_URL ? 'Set' : 'Not Set',
    R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID ? 'Set' : 'Not Set',
    CESIUM_ION_ACCESS_TOKEN: process.env.CESIUM_ION_ACCESS_TOKEN ? 'Set' : 'Not Set'
});

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // Allow frontend to connect (CORS)
app.use(express.json()); // Needed to read JSON bodies!
app.use(express.urlencoded({ extended: true }));

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

// NEW: Tiling API routes
app.use("/tiling", tilingRoutes);
app.use('/api/cesium', cesiumRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        details: err.message 
    });
});

app.listen(port, () => {
  console.log(`✅ API server running at http://localhost:${port}`);
});
