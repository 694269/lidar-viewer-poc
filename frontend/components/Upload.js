import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { supabase } from "../supabaseClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const Upload = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [assetId, setAssetId] = useState(() => localStorage.getItem("currentAssetId"));

  useEffect(() => {
    if (!assetId || !loading) return;

    const validateAndPoll = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.warn("User session expired, skipping polling");
        localStorage.removeItem("currentAssetId");
        setAssetId(null);
        setLoading(false);
        setStatus("Please log in to continue.");
        return;
      }

      const interval = setInterval(async () => {
        try {
          const res = await axios.get(`${API_URL}/api/cesium/status/${assetId}`);
          const { status: tilingStatus, percentComplete } = res.data;

          if (!tilingStatus) throw new Error("No tiling status returned");

          setStatus(`🔄 Tiling status: ${tilingStatus}`);
          if (percentComplete) setProgress(percentComplete);

          if (tilingStatus === "COMPLETE") {
            clearInterval(interval);
            setStatus("✅ Tiling complete! Launching viewer...");
            localStorage.removeItem("currentAssetId");
            setTimeout(() => {
              window.location.href = `/viewer-standalone?assetId=${assetId}`;
            }, 1000);
          }

          if (tilingStatus === "FAILED") {
            clearInterval(interval);
            localStorage.removeItem("currentAssetId");
            setStatus("❌ Tiling failed.");
            setLoading(false);
          }
        } catch (err) {
          console.error("Polling error:", err);
          clearInterval(interval);
          localStorage.removeItem("currentAssetId");
          setStatus("❌ Error checking tiling status.");
          setLoading(false);
        }
      }, 5000);

      return () => clearInterval(interval);
    };

    validateAndPoll();
  }, [assetId, loading]);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setStatus("❌ You must be logged in to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", file.name);

    try {
      setLoading(true);
      setStatus(`⬆️ Uploading ${file.name}...`);

      const res = await axios.post(`${API_URL}/api/cesium/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { assetId: newAssetId } = res.data;
      setAssetId(newAssetId);
      localStorage.setItem("currentAssetId", newAssetId);
      setStatus("✅ Upload complete. Tiling started...");
    } catch (err) {
      console.error("Upload error:", err);
      setStatus("❌ Upload failed.");
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/octet-stream": [".las", ".laz"] },
    maxFiles: 1,
  });

  const dropzoneStyle = {
    border: "2px dashed",
    borderColor: isDragActive ? "#3b82f6" : "#ccc",
    borderRadius: "0.5rem",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: isDragActive ? "#eef6ff" : "#fff",
    transition: "0.2s",
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div {...getRootProps()} style={dropzoneStyle} className="cursor-pointer w-full max-w-xl">
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? "Drop your LiDAR file here..."
            : "Drag a .las or .laz file here or click to upload"}
        </p>
      </div>

      {status && (
        <div className="mt-4 w-full max-w-xl text-center">
          {loading && progress !== null && (
            <div className="w-full bg-gray-200 h-2 rounded mb-2 overflow-hidden">
              <div
                className="bg-blue-500 h-2"
                style={{ width: `${progress}%`, transition: "width 0.5s" }}
              />
            </div>
          )}
          <p className="text-sm text-gray-700">{status}</p>
        </div>
      )}
    </div>
  );
};

export default Upload;
