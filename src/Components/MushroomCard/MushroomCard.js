import React from "react";
import "../MushroomCard.css";
import ToggleSave from "./ToggleFav";

const MushroomCard = ({ image, latinName, commonNames, probability }) => {
  const [isFav, setIsFav] = useState(false);

  

  return (
    <div className="mushroom-card">
      <div className="name-details">
        <h2>{latinName}</h2>
        <p>{commonNames.join(", ")}</p>
      </div>
      <img alt={latinName && commonNames} />
      {/* need to add src to line 14 */}
      <p className='probability'>Probability: {probability * 100}%</p>
      <div className="toggle-container">
        <ToggleSave isFav={isFav} onToggle={() => setIsFav(!isFav)} />
      </div>
    </div>
  );
};



export default MushroomCard;
