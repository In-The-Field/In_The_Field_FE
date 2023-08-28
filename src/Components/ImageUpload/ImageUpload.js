import React, { useState, useRef } from "react";
import "./ImageUpload.css";

const ImageUpload = ({ onImageUpload }) => {
  const [userImage, setUserImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const userFileInput = useRef(null);
  const [imageError, setImageError] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type.includes("jpeg")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        onImageUpload(base64);
        setImageError(null);
        console.log("Uploaded Base64 Image:", base64);
      };
      reader.readAsDataURL(droppedFile);
    } else {
      setImageError(
        "Incorrect file type, please upload .jpeg or .jpg file and try again."
      );
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes("jpeg")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        onImageUpload(base64);
        setImageError(null);
        console.log("Uploaded Base64 Image:", base64); // Log the base64 image data
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImageError(
        "Incorrect file type, please upload .jpeg or .jpg file and try again."
      );
    }
  };

  return (
    <form
      id="photo-form"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="label-photo-input">
        <button
          className="upload-button"
          onClick={() => userFileInput.current.click()}
        >
          Upload Photo
        </button>
        <input
          type="file"
          ref={userFileInput}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </div>
      <p>{imageError}</p>
      {isDragging && (
        <div
          className="drag-active"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default ImageUpload;
