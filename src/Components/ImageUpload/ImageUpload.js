import React, { useState } from 'react';
import "./ImageUpload.css"

const ImageUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(e.type === "dragenter" || e.type === "dragover"){
      setIsDragging(true);
    } else if (e.type === "dragleave"){
      setIsDragging(false)
    }
  };

  return (
    <form id="photo-form" onDragEnter={handleDrag}>
      <input type="file" id="photo-input" multiple={false} accept="image/*" />
      <label htmlFor="photo-input" className="label-photo-input">
        <div>
          <p>Drag and Drop your mushroom find</p>
          <button className="upload-button" >
            Upload Photo
          </button>
        </div>
      </label>
    </form>
  );
};

export default ImageUpload;
// const ImageUpload = () => {
//   const [userImage, setUserImage] = useState(null)

//   const handleUpload = (e) => {
//     const newImage = URL.createObjectURL(e.target.files[0])
//     setUserImage(newImage)
//   }

//   return (
//     <form id="photo-form"> 
//       <input type="file" id="photo-input" multiple={false} accept="image/*" onChange={handleUpload}/>
//       {/* <label id="label-photo-input">
//         <div>
//           <p>Drag and Drop your mushroom find</p>
//           <button className="upload-button" onClick={handleUpload}>Upload Photo</button>
//         </div>
//       </label> */}
//     </form>
//   )
// }
