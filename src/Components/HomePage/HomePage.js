import React from 'react';
import Nav from '../Nav/Nav';
import ImageUpload from '../ImageUpload/ImageUpload';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="content-container">
        <h1>Welcome to In The Field!</h1>
        <p>Drag and Drop -or- Upload your mushroom image here!</p>
        <ImageUpload />
      </div>
    </div>
  );
};

export default HomePage;