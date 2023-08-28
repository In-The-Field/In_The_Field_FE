import React, { useState, useRef } from 'react';
import "./ImageUpload.css"

const ImageUpload = () => {
  const [userImage, setUserImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false);
  const userFileInput = useRef(null)
  const [imageError, setImageError] = useState(null)

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
    if (e.dataTransfer.files[0] && e.dataTransfer.files[0].type.includes("image")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setUserImage(base64);
        setImageError(null);
        console.log("Uploaded Base64 Image:", base64); // Log the base64 image data
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
      console.log("data",reader.readAsDataURL(e.dataTransfer.files[0]))
    } else {
      setImageError("This is not an image file please try again");
    }
  }

  const handleFileUpload = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes("image")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setUserImage(base64);
        setImageError(null);
        console.log("Uploaded Base64 Image:", base64); // Log the base64 image data
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImageError("This is not an image file please try again");
    }
  }

  return (
    <form id="photo-form" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input type="file" ref={userFileInput} id="photo-input" multiple={false} accept="image/*" onChange={handleFileUpload} />
      {userImage ? (
        <div>
          <img src={userImage} className="user-image" alt="mushroom" />
          <button className="upload-button" onClick={() => setUserImage(null)}>
            Upload New Photo
          </button>
        </div>
      ) : (
        <div className="label-photo-input">
          <button className="upload-button" onClick={() => userFileInput.current.click()}>
            Upload Photo
          </button>
        </div>
      )}
      <p>{imageError}</p>
      {isDragging && (
        <div className="drag-active" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>
      )}
    </form>
  );
};

export default ImageUpload;
