// frontend/src/components/FileUploader.js
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUploader = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [loading, status]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      setLoading(true);
      setStatus(`Uploading ${file.name} to R2...`);

      // Step 1: Upload file directly to R2 manually (temporary)
      // TODO later: use signed URLs. For now manual R2 upload or skip this step

      // Step 2: Tell the API server to start tiling
      const r2FileUrl = `https://${process.env.REACT_APP_R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${process.env.REACT_APP_R2_BUCKET}/${file.name}`;

      const tileRes = await axios.post(
        "http://localhost:8080/tiling/start",
        {
          r2FileUrl,
          fileName: file.name,
        }
      );

      console.log("Tiling started:", tileRes.data);
      setStatus(`✅ Tiling started successfully for ${file.name}!`);

    } catch (err) {
      console.error(err);
      setStatus("❌ Upload or tiling failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="space-y-4">
      <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-8 text-center cursor-pointer rounded-2xl transition hover:border-blue-500 hover:bg-blue-50">
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag & drop a .laz file here, or click to select</p>
      </div>

      {status && (
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-700">
          {loading && (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
          )}
          <span>{status}</span>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
