import React from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./HomePage.css";
import { useState } from "react";

const HomePage = ({ error, userImage, onImageUpload }) => {

  return (
    <div className="home-page-container">
      {userImage ? (
        <div className="homepage-left-container">
          <img className="user-image" src={userImage} alt="mushroom" />
          <button
            className="upload-new-button"
            onClick={() => onImageUpload(null)}
          >
            Upload New Photo
          </button>
        </div>
      ) : null}

      {!userImage && (
        <div className="content-container">
          {error ? (
            <ErrorPage error={error} />
          ) : (
            <>
              <h1>Welcome to In The Field!</h1>
              <p>Drag and Drop -or- Upload your mushroom image here!</p>
              <ImageUpload onImageUpload={onImageUpload} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;

// const [mushrooms, setMushrooms] = useState([]);

// const renderMushroomCards = () => {
//         return mushrooms.map(mushroom => (
  //         <Link to="details:id"
//             <MushroomCard
//                 key={mushroom.id}
//                 image={mushroom.image}
//                 latinName={mushroom.latinName}
//                 commonNames={mushroom.commonNames}
//                 probability={mushroom.probability}
//             />
//           />
//       ));
// }
