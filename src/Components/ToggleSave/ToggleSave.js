import React, { useState } from "react";
import toggleOffImage from "../images/image_png.png";
import toggleOnImage from "../images/color toggle (1).png";
import "../ToggleSave/ToggleSave.css";
import { useMutation } from "@apollo/client";
import {TOGGLE_SAVE_MUSHROOM} from "../../queries"

const ToggleSave = ({ mushroomId, isSavedInitially }) => {
  const [isToggled, setIsToggled] = useState(isSavedInitially);
  const [toggleSaveMushroom] = useMutation(TOGGLE_SAVE_MUSHROOM);
  const userId = 1
  const handleToggle = async () => {
    try {
      console.log("userId:", userId)
      console.log("mushroomId:", mushroomId)
      
      await toggleSaveMushroom({
        variables: { userId,mushroomId},
      });

      setIsToggled(!isToggled);
    } catch (error) {
      console.error("Error toggling save:", error);
    }
  };

  return (
    <div onClick={handleToggle} className={`toggle-save-container ${isToggled ? 'toggled-on' : ''}`}>
      <img src={isToggled ? toggleOnImage : toggleOffImage} alt="Toggle" className="toggle-image" />
    </div>
  );
};

export default ToggleSave;
