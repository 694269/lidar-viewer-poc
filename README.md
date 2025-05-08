# LiDAR Viewer POC

A proof of concept for uploading, processing, and viewing LiDAR data using Cesium Ion.

## Local Development Setup

1. Clone the repository
2. Set up environment variables:

### API Server (.env file in api-server directory)
```
PORT=3001
CESIUM_ION_ACCESS_TOKEN=your_cesium_ion_access_token_here
```

### Frontend (.env file in frontend directory)
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_CESIUM_ION_TOKEN=your_cesium_ion_access_token_here
```

3. Install dependencies:
```bash
# Install API server dependencies
cd api-server
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

4. Start the development servers:
```bash
# Start API server (in api-server directory)
npm start

# Start frontend (in frontend directory)
npm start
```

## Testing the Setup

1. Get your Cesium Ion access token:
   - Go to https://cesium.com/ion/signup
   - Create an account or sign in
   - Go to Access Tokens and create a new token
   - Copy the token and add it to both .env files

2. Test the upload:
   - Open http://localhost:3000 in your browser
   - Upload a .las or .laz file
   - The file will be processed by Cesium Ion
   - Once processing is complete, the 3D tileset will be displayed

## Supported File Formats

- LAS (.las)
- LAZ (.laz)

## Features

- Direct upload to Cesium Ion
- Automatic 3D tileset generation
- Real-time processing status updates
- 3D visualization of processed point clouds 