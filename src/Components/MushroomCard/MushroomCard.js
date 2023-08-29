import React, { useState } from 'react';
import "../MushroomCard/MushroomCard.css";
import ToggleSave from "../ToggleSave/ToggleSave";

const MushroomCard = ({ image, latinName, commonNames, probability }) => {
  const [isFav, setIsFav] = useState(false);

  const toggleImage = () => {
    setIsFav(!isFav);
  };


  return (
    <div className="mushroom-card">
      <div className="card-content">
        <div className="name-details">
          <h2>{latinName}</h2>
          {Array.isArray(commonNames) ? (
            <p>{commonNames.join(", ")}</p>
          ) : (
            <p>{commonNames}</p>
          )}
        </div>
        <img src={image} alt={latinName && commonNames} className="mushroom-image" /> {/* Add the class name here */}
        <p className='probability'>Probability: {probability * 100}%</p>
        <div className="toggle-container">
          <ToggleSave isFav={isFav} onToggle={() => setIsFav(!isFav)} />
          
        </div>
      </div>
    </div>
  );
};

export default MushroomCard;
