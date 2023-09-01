import React, { useEffect, useState } from 'react';
import {Route, Routes } from 'react-router-dom'; 
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import FieldGuide from '../FieldGuide/FieldGuide';
import './App.css';
import Nav from '../Nav/Nav'
import { NavLink } from 'react-router-dom';
import { mockMushroomCards } from '../../mockData.js';
import MushroomCard from "../MushroomCard/MushroomCard";
import DetailsPage from '../DetailsPage/DetailsPage';
import ToggleSave from '../ToggleSave/ToggleSave';

import { useQuery } from '@apollo/client';
import GET_MUSHROOM_MATCHES from '../../queries.js'
// import { useEffect } from 'react';


function App() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const { loading, error: queryError, data } = useQuery(GET_MUSHROOM_MATCHES, {
    variables: { image: userImage },
    skip: !userImage,
  });
  
  useEffect(() => {
    if (queryError) {
      console.error("There was an error fetching data:", queryError);
      setError(queryError.message);
      setShowError(true);
    }
  }, [queryError])

 const renderMushroomCards = () => {

  if (loading) return <p>Loading...</p>; 
  if (!data || !data.mushrooms) return <p>No mushrooms found.</p>;

  console.log('data', data)

    return data.mushrooms.map((mushroom) => (
      <div className="mushroom-card-wrapper">
        <NavLink to={`details/${mushroom.id}`} className="custom-nav-link" state={mushroom}>
          <MushroomCard
            key={mushroom.apiId}
            id={mushroom.apiId}
            image={mushroom.photo}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonName}
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
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
