import React from "react";
import "./MushroomCard.css";
import ToggleSave from '../ToggleSave/ToggleSave';
import { formatProbability } from "../../utils";
import { useState } from "react";
import { useLocation } from 'react-router-dom'


const MushroomCard = ({ image, latinName, commonNames, probability }) => {
  const [isFav, setIsFav] = useState(false);
  let location = useLocation()
  console.log(location.pathname)
  const displayProbability = formatProbability(probability);
  if(location.pathname === '/myfieldguide'){
  return (
    <div className="mushroom-card">
      <div className="name-details">
        <h2>{latinName}</h2>
        <p>{commonNames}</p>
      </div>
      <img src={image} alt={latinName && commonNames} />
    </div>
  );
  } else {
    return (
      <div className="mushroom-card">
        <div className="name-details">
          <h2>{latinName}</h2>
          <p>{commonNames}</p>
        </div>
        <img src={image} alt={latinName && commonNames} />
        <p className='probability'>Probability: {displayProbability}%</p>
      </div>
    );
  }
};

export default MushroomCard;
