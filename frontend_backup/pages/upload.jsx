// File: frontend/pages/upload.jsx
import withAuth from "../components/Auth";
import Layout from "../components/layout";
import Upload from "../components/Upload";

function UploadPage() {
  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Upload LiDAR File</h1>
      <Upload />
    </Layout>
  );
}

export default withAuth(UploadPage);
