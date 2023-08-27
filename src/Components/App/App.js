import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import HomePage from '../HomePage/HomePage'; 
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [showError, setShowError] = useState(false); // State to control error rendering

  const handleError = () => {
    setShowError(true);
  }

  return (
    <Router>
      <div className="App">
        {showError && <ErrorPage />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
