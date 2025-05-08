// frontend/src/App.jsx
import React, { useState } from "react";
import Upload from "./components/Upload";
import { Viewer, Cesium3DTileset, CameraFlyTo } from "resium";
import { Ion } from "cesium";

// Setup Cesium Ion access token
Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_ION_TOKEN;

const App = () => {
  const [tilesetOptions, setTilesetOptions] = useState(null);

  const handleTilesetReady = (options) => {
    setTilesetOptions(options);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="p-4 bg-gray-100 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">LiDAR Viewer</h1>
      </div>

      <div className="flex flex-1">
        <div className="w-80 p-4 border-r overflow-auto">
          <Upload onTilesetReady={handleTilesetReady} />
        </div>

        <div className="flex-1">
          <Viewer full>
            {tilesetOptions && (
              <>
                <Cesium3DTileset url={tilesetOptions.tilesetUrl} />
                <CameraFlyTo
                  duration={3}
                  destination={{
                    x: -1285726.4,
                    y: -4725697.7,
                    z: 4081974.4,
                  }}
                />
              </>
            )}
          </Viewer>
        </div>
      </div>
    </div>
  );
};

export default App;
