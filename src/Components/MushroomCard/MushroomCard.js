import React from "react";
import "./MushroomCard.css";
import { formatProbability } from "../../utils";
import { useLocation } from 'react-router-dom'
import PropTypes from "prop-types"; 

const MushroomCard = ({ image, latinName, commonNames, probability }) => {
  let location = useLocation()
  const displayProbability = formatProbability(probability);
  
  if(location.pathname.includes('/myfieldguide')){
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

MushroomCard.propTypes = {
  image: PropTypes.string,
  latinName: PropTypes.string, 
  commonNames: PropTypes.string, 
  probability: PropTypes.number, 
};

export default MushroomCard;
