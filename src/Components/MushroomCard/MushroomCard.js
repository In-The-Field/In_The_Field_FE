import React from "react";
import "../MushroomCard.css";
import ToggleSave from "./ToggleFav";
import { formatProbability } from "../../utils";
import { useState } from "react";

const MushroomCard = ({ image, latinName, commonNames, probability }) => {
  const [isFav, setIsFav] = useState(false);

  const displayProbability = formatProbability(probability);

  return (
    <div className="mushroom-card">
      <div className="name-details">
        <h2>{latinName}</h2>
        <p>{commonNames.join(", ")}</p>
      </div>
      <img src={image} alt={latinName && commonNames} />
      <p className='probability'>Probability: {displayProbability}%</p>
      <div className="toggle-container">
        <ToggleSave isFav={isFav} onToggle={() => setIsFav(!isFav)} />
      </div>
    </div>
  );
};



export default MushroomCard;
