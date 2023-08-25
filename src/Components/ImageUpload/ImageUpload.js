import './ImageUpload.css'
import { useState } from 'react'



const ImageUpload = () => {
  const [userImage, setUserImage] = useState(null)

  const handleUpload = (e) => {
    const newImage = URL.createObjectURL(e.target.files[0])
    setUserImage(newImage)
  }

  return (
    <form id="photo-form"> 
      <input type="file" id="photo-input" multiple={false} accept="image/*" onChange={handleUpload}/>
      {/* <label id="label-photo-input">
        <div>
          <p>Drag and Drop your mushroom find</p>
          <button className="upload-button" onClick={handleUpload}>Upload Photo</button>
        </div>
      </label> */}
    </form>
  )
}
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

export default ImageUpload