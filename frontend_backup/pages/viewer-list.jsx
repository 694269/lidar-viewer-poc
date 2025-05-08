// frontend/pages/viewer-list.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import withAuth from "../components/Auth";
import Layout from "../components/layout";
import Link from "next/link";

function ViewerList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const { data, error } = await supabase
        .from("lidar_files")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setAssets(data || []);
    };

    fetchAssets();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Your Uploaded LiDAR Assets</h1>
      {assets.length === 0 ? (
        <p>No assets uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {assets.map((file) => (
            <li
              key={file.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{file.file_name}</p>
                <p className="text-sm text-gray-500">
                  Asset ID: {file.cesium_asset_id || "Processing..."}
                </p>
              </div>
              {file.cesium_asset_id && (
                <a
                  href={`/viewer-standalone?assetId=${file.cesium_asset_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}

export default withAuth(ViewerList);
