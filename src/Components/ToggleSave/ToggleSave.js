import React, { useState } from "react";
import toggleOffImage from "../images/image_png.png";
import toggleOnImage from "../images/color toggle (1).png";
import "../ToggleSave/ToggleSave.css";

const ToggleSave = () => {
  const [isToggled, setIsToggled] = useState(false); // Start with the toggle off

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
