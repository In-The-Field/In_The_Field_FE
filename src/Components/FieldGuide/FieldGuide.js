import React from 'react';
import MushroomCard from '../MushroomCard/MushroomCard';
import './FieldGuide.css';
import { GET_SAVED_USERMUSHROOMS } from "../../queries"
import { useQuery } from '@apollo/client';
import ToggleSave from '../ToggleSave/ToggleSave';
import { NavLink } from 'react-router-dom';

const FieldGuide = ({setIsSaved}) => {
  const userID = 4

  const { loading, error: queryError, data } = useQuery(GET_SAVED_USERMUSHROOMS, {
    variables: { id: userID },
  });
  
  const renderSavedMushroomCards = () => {
    if (loading) return <p>Loading...</p>;
    if (!data || !data.user.savedMushrooms.length) return <p>You have no mushrooms saved.</p>;
    
    return data.user.savedMushrooms.map((mushroom) => ( 
      <div className="mushroom-card-wrapper" key={mushroom.id}>
        <NavLink to={`../details/${mushroom.id}`} className="custom-nav-link" >
          <MushroomCard
            id={mushroom.id}
            key={mushroom.id}
            image={mushroom.photo}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonName} 
          />
        </NavLink>
        <ToggleSave mushroomId={mushroom.id} setIsSaved={setIsSaved} /> 
      </div>
    ));
  };
  
  return (
    <div className="field-guide-container">
      <div className="field-guide-content">
     
        {renderSavedMushroomCards()}
      </div>
    </div>
  );
};

export default FieldGuide;