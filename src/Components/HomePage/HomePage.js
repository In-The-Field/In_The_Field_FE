import React from "react";
import "./HomePage.css";
import ErrorPage from "../ErrorPage/ErrorPage"; 
import ImageUpload from "../ImageUpload/ImageUpload"; 

const HomePage = ({ error, userImage, onImageUpload, renderMushroomCards }) => {

  return (
    <div className="home-page-container">
      {userImage ? (
        <div className="homepage-content-container">
          <div className="homepage-left-container">
            <img className="user-image" src={userImage} alt="mushroom" />
            <button
              className="upload-new-button"
              onClick={() => onImageUpload(null)}
            >
              Upload New Photo
            </button>
          </div>
          <div className="homepage-right-container">
            {renderMushroomCards()} 
          </div>
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