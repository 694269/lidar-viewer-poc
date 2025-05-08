// File: frontend/pages/viewer-standalone.jsx

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ViewerStandalone() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.initCesiumViewer = async () => {
      const Cesium = window.Cesium;
      if (!Cesium) {
        console.error("❌ Cesium is not available in window");
        return;
      }

      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MmZhOTkxNC05NDZjLTQxYWEtYTMzZC1kZDlmNzdmOTE4ZjUiLCJpZCI6Mjk3MDk4LCJpYXQiOjE3NDU1NTY2MDd9.AtqGQrYH5qty5SviyeNXrGA1KyULNEACq9lJzNfICzo";

      const urlParams = new URLSearchParams(window.location.search);
      const assetId = urlParams.get("assetId");

      if (!assetId) {
        alert("Missing assetId in URL (e.g., ?assetId=123456)");
        return;
      }

      const viewer = new Cesium.Viewer("cesiumContainer", {
        timeline: false,
        animation: false,
        baseLayerPicker: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        homeButton: false,
        geocoder: false,
        fullscreenButton: false,
        infoBox: false,
        selectionIndicator: false,
      });

      try {
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(Number(assetId));
        viewer.scene.primitives.add(tileset);
        await viewer.zoomTo(tileset);

        const extras = tileset.asset?.extras;
        if (
          Cesium.defined(extras) &&
          Cesium.defined(extras.ion) &&
          Cesium.defined(extras.ion.defaultStyle)
        ) {
          tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
        }

        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to load tileset:", error);
        document.getElementById("loadingMessage").innerText = "❌ Failed to load tileset.";
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
      <Script
        src="https://cesium.com/downloads/cesiumjs/releases/1.111/Build/Cesium/Cesium.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.initCesiumViewer) {
            window.initCesiumViewer();
          }
        }}
      />

      <div
        id="cesiumContainer"
        className="absolute inset-0"
      />

      {loading && (
        <div
          id="loadingOverlay"
          className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div id="loadingMessage" className="text-white text-lg font-medium">Loading Tileset...</div>
          </div>
        </div>
      )}
    </div>
  );
}
