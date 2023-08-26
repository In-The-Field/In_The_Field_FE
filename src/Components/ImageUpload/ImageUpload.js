import React, { useState, useRef } from 'react';
import "./ImageUpload.css"

const ImageUpload = () => {
  const [userImage, setUserImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false);
  const [base64Image, setBase64Image] = useState('')
  const userFileInput = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(e.type === "dragenter" || e.type === "dragover"){
      setIsDragging(true);
    } else if (e.type === "dragleave"){
      setIsDragging(false)
    }
  };

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setIsDragging(false)
    console.log(e.dataTransfer.files[0])
    if (e.dataTransfer.files[0] && e.dataTransfer.files[0].type.includes("image")) {
      const newImage = URL.createObjectURL(e.dataTransfer.files[0]);
      const createBase64 = btoa(newImage)
      setUserImage(newImage);
      setBase64Image(createBase64)
    }
  }

  const handleClick = () => {
    userFileInput.current.click();
  }

  const handleFileUpload = (e) => {
    if (e.target.files[0] && e.target.files[0].type.includes("image")) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      const createBase64 = btoa(newImage)
      setUserImage(newImage);
      setBase64Image(createBase64)
    }
  };

  return (
    <form id="photo-form" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input type="file" ref={userFileInput} id="photo-input" multiple={false} accept="image/*" onChange={handleFileUpload} />
        <div  className="label-photo-input">
          <p>Drag and Drop your mushroom find</p>
          <button  className="upload-button" onClick={handleClick} >
            Upload Photo
          </button>
        </div>
      {userImage && <img src={userImage} />}
      {/* above is only for viewing image droppings change state */}
      {isDragging && <div className="drag-active" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form>
  );
};

export default ImageUpload;
