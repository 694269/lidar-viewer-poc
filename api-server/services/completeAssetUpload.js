// services/completeAssetUpload.js
const axios = require("axios");

async function completeAssetUpload(onCompleteUrl) {
  try {
    await axios.post(onCompleteUrl, {}, {
      headers: {
        Authorization: `Bearer ${process.env.CESIUM_ION_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log("✅ Upload completed successfully in Cesium.");
  } catch (error) {
    console.error("❌ Error completing upload:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = {
  completeAssetUpload,
};
