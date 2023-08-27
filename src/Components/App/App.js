import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Nav from "../Nav/Nav";

function App() {
  const [showError, setShowError] = useState(false); // State to control error rendering

  const handleError = () => {
    setShowError(true);
  };

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

// I think line 18 needs to be in a conditional with a terteary so that the ErrorPage component is only rendered IF there is an error...  let's work on that when the time comes

export default App;
