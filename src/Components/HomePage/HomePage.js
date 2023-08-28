import React from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
import ErrorPage from '../ErrorPage/ErrorPage';
import './HomePage.css';

const HomePage = ({ error }) => {
  return (
    <div className="home-page-container">
      <div className="content-container">
      {error ? (
          <ErrorPage error={error} /> 
        ) : (
          <>
            <h1>Welcome to In The Field!</h1>
            <p>Drag and Drop -or- Upload your mushroom image here!</p>
            <ImageUpload />
          </>
        )}
      </div>
    </div>
  );
  
};

export default HomePage;

// const [mushrooms, setMushrooms] = useState([]);

// const renderMushroomCards = () => {
//         return mushrooms.map(mushroom => (
//             <MushroomCard 
//                 key={mushroom.id}
//                 image={mushroom.image} 
//                 latinName={mushroom.latinName} 
//                 commonNames={mushroom.commonNames}
//                 probability={mushroom.probability} 
//             />
//       ));
// }