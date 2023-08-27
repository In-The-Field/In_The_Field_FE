import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom'; 
import './App.css';
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import Nav from '../Nav/Nav'

function App() {
  const [showError, setShowError] = useState(false);
  const handleError = () => {
    setShowError(true);
  }

  return (
    <>
      <Nav />
       {/* {showError && <ErrorPage />} */}
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/error" element={<ErrorPage />} />
         </Routes>
     </>
     );
   }

export default App;
