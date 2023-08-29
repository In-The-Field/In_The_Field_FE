import React, { useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./HomePage.css";
import { mockMushroomCards } from '../../mockData.js';
import { Link } from 'react-router-dom';
import MushroomCard from "../MushroomCard/MushroomCard";


const HomePage = ({ error, userImage, onImageUpload }) => {
  // const [mushrooms, setMushrooms] = useState([]);

  const renderMushroomCards = () => {
    return mockMushroomCards.map(mushroom => (
      <Link to={`details/${mushroom.id}`} key={mushroom.id}> 
        <MushroomCard
            image={mushroom.image}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonNames}
            probability={mushroom.probability}
        />
      </Link>
    ));
  };

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
              {renderMushroomCards()}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
