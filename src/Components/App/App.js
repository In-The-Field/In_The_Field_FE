import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import FieldGuide from '../FieldGuide/FieldGuide';
import './App.css';
import Nav from '../Nav/Nav'
import { NavLink } from 'react-router-dom';
import MushroomCard from "../MushroomCard/MushroomCard";
import DetailsPage from '../DetailsPage/DetailsPage';
import ToggleSave from '../ToggleSave/ToggleSave';
import { useQuery } from '@apollo/client';
import { GET_MUSHROOM_MATCHES } from '../../queries';

function App() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

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
  
    return data.mushrooms.map((mushroom) => (
      <div className="mushroom-card-wrapper" key={mushroom.id}>
        <NavLink to={`details/${mushroom.id}`} className="custom-nav-link" >
          <MushroomCard
            id={mushroom.id}
            key={mushroom.id}
            image={mushroom.photo}
            latinName={mushroom.latinName}
            commonNames={mushroom.commonName}
            probability={mushroom.probability}
          />
        </NavLink>
        <ToggleSave
          mushroomId={mushroom.id}
          setIsSaved={setIsSaved}
        />
      </div>
    ));
  };
  
  const handleError = (errorInfo) => {
    setError(errorInfo); 
    setShowError(true);
  };

  return (
      <div>
        <Nav />
        {showError && <ErrorPage error={error} />} 
        <Routes>
          <Route path="/" element={<HomePage error={error} userImage={userImage} onImageUpload={setUserImage} renderMushroomCards={renderMushroomCards} />} />
          <Route path="/error" element={<ErrorPage error={error} />} />
          <Route path="/myfieldguide" element={<FieldGuide error={error} setIsSaved={setIsSaved} />}>
            <Route path="details/:id" element={<DetailsPage setIsSaved={setIsSaved} />} />
          </Route>
          <Route path="details/:id" element={<DetailsPage setIsSaved={setIsSaved} />} />
        </Routes>
      </div>
  );
}

export default App;
