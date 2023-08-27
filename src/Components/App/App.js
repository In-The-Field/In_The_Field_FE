import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';
import Nav from '../Nav/Nav';

function App() {
  const [showError, setShowError] = useState(false); // State to control error rendering

  const handleError = () => {
    setShowError(true);
  }

  return (
 <>
   <Nav />
    {showError && <ErrorPage />}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
