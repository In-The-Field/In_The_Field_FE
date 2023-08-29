import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'; 
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import FieldGuide from '../FieldGuide/FieldGuide';
import './App.css';
import Nav from '../Nav/Nav'

function App() {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);

   const handleError = (errorInfo) => {
    setError(errorInfo); 
    setShowError(true);
  };

  return (
    <>
      <Nav />
      {showError && <ErrorPage error={error} />} 
      <Routes>
        <Route path="/" element={<HomePage error={error} />} />
        <Route path="/error" element={<ErrorPage error={error} />} />
        <Route path="/myfieldguide" element={<FieldGuide />} /> 
      </Routes>

    </>
  );
}

export default App;
