
import React from "react";
import toggleOffImage from "../images/image_png.png";
import toggleOnImage from "../images/color toggle (1).png";
import "../ToggleSave/ToggleSave.css";
import { useMutation, useQuery } from "@apollo/client";
import { SAVE_DELETE_USER_MUSHROOM, GET_SAVED_USERMUSHROOMS } from "../../queries";

const ToggleSave = ({ mushroomId, setIsSaved }) => {
  const userId = 4;

  const { data: cachedData } = useQuery(GET_SAVED_USERMUSHROOMS, {
    variables: { id: userId },
  });

  console.log('cached data', cachedData)

  const isMushroomSaved = cachedData?.user?.savedMushrooms.some(m => m.id === mushroomId);

  const [saveMushroom] = useMutation(SAVE_DELETE_USER_MUSHROOM, {
    variables: {
      userId,
      mushroomId
    },
    update(cache, { data: { saveUserMushrooms } }) {
      const existingMushrooms = cache.readQuery({
        query: GET_SAVED_USERMUSHROOMS,
        variables: { id: userId }
      });

      const newMushrooms = saveUserMushrooms.userMushroom.isSaved
        ? [...existingMushrooms.user.savedMushrooms, saveUserMushrooms.mushroom]
        : existingMushrooms.user.savedMushrooms.filter(m => m.id !== mushroomId);

      cache.writeQuery({
        query: GET_SAVED_USERMUSHROOMS,
        variables: { id: userId },
        data: {
          user: {
            ...existingMushrooms.user,
            savedMushrooms: newMushrooms
          }
        }
      });

      setIsSaved(saveUserMushrooms.userMushroom.isSaved);
    }
  });

  return (
    <button onClick={() => saveMushroom()} className={`toggle-save-container ${isMushroomSaved ? 'toggled-on' : ''}`}>
      <img 
        src={isMushroomSaved ? toggleOnImage : toggleOffImage} 
        alt={isMushroomSaved ? 'Mushroom is saved' : 'Mushroom is unsaved'} 
        className='toggle-image'
      />
    </button>
  );
};

export default ToggleSave;
