import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'; 
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import FieldGuide from '../FieldGuide/FieldGuide';
import './App.css';
import Nav from '../Nav/Nav'
import { NavLink } from 'react-router-dom';
import { mockMushroomCards } from '../../mockData.js';
import MushroomCard from "../MushroomCard/MushroomCard";
import ToggleSave from '../ToggleSave/ToggleSave';

function App() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [userImage, setUserImage] = useState(null);

 const renderMushroomCards = () => {
    return mockMushroomCards.map((mushroom) => (
      <div className="mushroom-card-wrapper" key={mushroom.id}>
        <NavLink to={`details/${mushroom.id}`} className="custom-nav-link">
          <MushroomCard
            image={mushroom.image}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonNames}
            probability={mushroom.probability}
          />
        </NavLink>
        <ToggleSave />
      </div>
    ));
  };

   const handleError = (errorInfo) => {
    setError(errorInfo); 
    setShowError(true);
  };

  return (
    <>
      <Nav />
      {showError && <ErrorPage error={error} />} 
      <Routes>
        <Route path="/" element={<HomePage error={error}  userImage={userImage} onImageUpload={setUserImage} renderMushroomCards={renderMushroomCards}/>} /> 
        <Route path="/error" element={<ErrorPage error={error} />} /> 
        <Route path="/myfieldguide" element={<FieldGuide error={error} renderMushroomCards={renderMushroomCards} />} />
      </Routes>

    </>
  );
}

export default App;
