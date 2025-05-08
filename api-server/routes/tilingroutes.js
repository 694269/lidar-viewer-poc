// api-server/routes/tilingRoutes.js

const express = require('express');
const multer = require('multer');
const UploadService = require('../services/uploadService'); // import the class
const uploadService = new UploadService(); // instantiate once!

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // temporary storage for uploads

// POST /tiling/start
router.post('/start', upload.single('file'), async (req, res) => {
  const file = req.file;
  const userId = req.body.userId || 'anonymous'; // fallback if no userId provided

  if (!file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    const result = await uploadService.handleUpload(file, userId);
    res.json({ success: true, assetId: result.assetId, record: result.record });
  } catch (error) {
    console.error('🔥 Error in /upload-and-start:');
    console.error(error.stack || error.message);
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error',
      stack: error.stack || ''
    });
  }
});

module.exports = router;
