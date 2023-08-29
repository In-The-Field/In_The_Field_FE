import React from 'react';
import MushroomCard from '../MushroomCard/MushroomCard';
import './FieldGuide.css';

const FieldGuide = ({ renderMushroomCards }) => {
  return (
    <div className="field-guide-container">
      <div className="field-guide-content">
        {renderMushroomCards()}
      </div>
    </div>
  );
};

export default FieldGuide;

