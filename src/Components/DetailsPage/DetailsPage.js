import React from "react";
import "./DetailsPage.css";

const DetailsPage = ({ latinName, commonName, edibility, taxonomy, photo, characteristic }) => {
  return (
    <div className="details-container">
      <div className="image-latin-common-container">
        <div className="pic">
          <img className="details-image" src={photo} alt="mushroom" />
        </div>
        <div className="latin-common-edibility-taxonomy">
          <div className="name-taxonomy-cont">
            <div className="name-holder">
              <h2>{latinName}</h2>
              <p>{commonName}</p>
            </div>
            <div className="taxonomy">
              <h3>Taxonomy:</h3>
              <p>Genus: {taxonomy.genus},</p>
              <p>Order: {taxonomy.order},</p>
              <p>Family: {taxonomy.family},</p>
              <p>Phylum: {taxonomy.phylum},</p>
              <p> Kingdom: {taxonomy.kingdom}</p>
            </div>
            <div className="taxonomy">
              <h3>Characterisics:</h3>
              <p> Hymenium Type: {characteristic.hymeniumType},</p>
              <p> Stipe Character: {characteristic.stipeCharacter},</p>
              <p> Spore Print Color {characteristic.sporePrintColor},</p>
              <p> Mushroom Cap Shape: {characteristic.mushroomCapShape},</p>
              <p> Hymenium Attachment: {characteristic.hymeniumAttachment}</p>
              <p> Mushroom Ecological Type: {characteristic.mushroomEcologicalType}</p>
            </div>
          </div>
          <div className="info">
            <p><strong>Edibility: </strong> {edibility}</p>
            <p><strong>Lookalike: </strong>{lookalike}</p>
            <p><strong>Psychoactive: </strong>{psychoactive}</p>
          </div>
        </div>
      </div>
      <div className="description">
        <p><strong>Description:</strong>{description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
