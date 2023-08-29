import React from 'react';
import MushroomCard from '../MushroomCard/MushroomCard';
import mockMushroomCards from "../MushroomMockData/MockMushroomCards"
import './FieldGuide.css';

const FieldGuide = () => {
  return (
    <div className="field-guide-container">
      <div className="field-guide-content">
        {mockMushroomCards.map((mushroom) => (
          <MushroomCard
            key={mushroom.id}
            image={mushroom.image}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonNames}
            probability={mushroom.probability}
          />
        ))}
      </div>
    </div>
  );
};

export default FieldGuide;
