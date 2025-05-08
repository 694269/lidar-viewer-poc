// frontend/next.config.js
const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: path.resolve(__dirname, "node_modules/cesium/Source"),
    };

    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
      use: ["file-loader"],
    });

    config.output.sourcePrefix = "";

    return config;
  },
  env: {
    CESIUM_BASE_URL: "/cesium",
  },
};
