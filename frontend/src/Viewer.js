import React, { useRef, useEffect, useState } from "react";
import { Viewer, Cesium3DTileset } from "resium";
import {
  Ion,
  IonResource,
  Cartesian3,
  Transforms,
  Cesium3DTileStyle,
  defined,
  buildModuleUrl
} from "cesium";

// Set Cesium ion access token
Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_ION_TOKEN;

// Fix asset loading path for Cesium
buildModuleUrl.setBaseUrl("/static/Cesium/");

export default function CesiumViewer() {
  const viewerRef = useRef();
  const tilesetRef = useRef();

  const [tilesetUrl] = useState(() => IonResource.fromAssetId(3330602));

  // Apply modelMatrix and zoom after tileset is mounted
  useEffect(() => {
    const viewer = viewerRef.current?.cesiumElement;
    const tileset = tilesetRef.current?.cesiumElement;

    if (viewer && tileset) {
      // Safe to modify the modelMatrix now
      tileset.modelMatrix = Transforms.eastNorthUpToFixedFrame(
        Cartesian3.fromDegrees(0, 0)
      );

      // Optional: Apply ion default style
      const extras = tileset.asset?.extras;
      if (
        defined(extras) &&
        defined(extras.ion) &&
        defined(extras.ion.defaultStyle)
      ) {
        tileset.style = new Cesium3DTileStyle(extras.ion.defaultStyle);
      }

      // Fly to tileset
      viewer.zoomTo(tileset);
    }
  }, [tilesetUrl]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Viewer ref={viewerRef} full>
        <Cesium3DTileset ref={tilesetRef} url={tilesetUrl} />
      </Viewer>
    </div>
  );
}