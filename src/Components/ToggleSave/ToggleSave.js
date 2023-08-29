import React, { useState } from 'react';
import toggleOnImage from '../images/image_png.png';
import toggleOffImage from '../images/color toggle (1).png';
import '../ToggleSave/ToggleSave.css'

const ToggleSave = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div onClick={handleToggle} className={`toggle-save-container ${isToggled ? 'toggled-on' : ''}`}>
      <img src={isToggled ? toggleOnImage : toggleOffImage} alt="Toggle" className="toggle-image" />
    </div>
  );
};

export default ToggleSave;
