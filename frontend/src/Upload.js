import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Upload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    axios.post("http://localhost:8080/upload", formData)
      .then(res => console.log("Uploaded:", res.data))
      .catch(err => console.error(err));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border border-dashed border-gray-400 p-8 text-center cursor-pointer">
      <input {...getInputProps()} />
      <p>Drag & drop a .laz file here, or click to select</p>
    </div>
  );
};

export default Upload;
