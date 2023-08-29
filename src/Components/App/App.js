import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'; 
import './App.css';
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom';
import { mockMushroomCards } from '../../mockData.js';
import MushroomCard from "../MushroomCard/MushroomCard";

function App() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const renderMushroomCards = () => {
    return mockMushroomCards.map(mushroom => (
      <Link to={`details/${mushroom.id}`} key={mushroom.id}> 
        <MushroomCard
            image={mushroom.image}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonNames}
            probability={mushroom.probability}
        />
      </Link>
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
      </Routes>
    </>
  );
}

export default App;
