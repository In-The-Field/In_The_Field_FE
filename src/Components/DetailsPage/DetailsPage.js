import React from "react";
import "./DetailsPage.css";
import { useLocation } from "react-router-dom";
import ToggleSave from "../ToggleSave/ToggleSave";
import { handleNoLookAlikes, handleNullCharacteristics } from "../../utils";
import { useToggleSave } from '../../ToggleSaveContext';

const DetailsPage = () => {
  const location = useLocation();
  const mushroom = location.state;
  const taxonomy = mushroom.taxonomies[0];
  const characteristics = mushroom.characteristics[0];
  const lookAlikesValue = handleNoLookAlikes(mushroom.lookAlikes);
  const { isToggled, toggle } = useToggleSave();

  return (
    <div className="details-container">
      <div className="grid-container">
        <div className="image-latin-common-container">
          <div className="pic">
            <div className="name-holder">
              <h2 className="latin-name">{mushroom.latinName}</h2>
              <p>{mushroom.commonName}</p>
            </div>
            <img className="details-image" src={mushroom.photo} alt="mushroom" />
            <div className="save-detail">
            <ToggleSave
          mushroomId={mushroom.id}
          isSavedInitially={isToggled}
          onToggle={(mushroomId, isToggled) => toggle()}
          isToggled={isToggled} 
          toggle={toggle} 
        />
      </div>
    </div>
          <div className="latin-common-edibility-taxonomy">
            <div className="taxonomy-edibility-lookalike-psychoactive">
              <div className="taxonomy">
                <h3>Taxonomy:</h3>
                <p>Genus: {taxonomy.genus}</p>
                <p>Order: {taxonomy.order}</p>
                <p>Family: {taxonomy.family}</p>
                <p>Phylum: {taxonomy.phylum}</p>
                <p> Kingdom: {taxonomy.kingdom}</p>
              </div>
              <div className="info">
                <p>
                  <strong>Edibility: </strong> {mushroom.edibility || "not provided"}{" "}
                </p>
                <p>
                  <strong>Lookalike: </strong> {lookAlikesValue}
                </p>
                <p>
                  <strong>Psychoactive: </strong>{" "}
                  {mushroom.psychoactive === null ? "not provided" : mushroom.psychoactive ? "true" : "false"}
                </p>
              </div>
            </div>
            <div className="characteristics">
              <h3>Characteristics:</h3>
              <p> Hymenium Type: {handleNullCharacteristics(characteristics.hymeniumType)}</p>
              <p> Stipe Character: {handleNullCharacteristics(characteristics.stipeCharacter)}</p>
              <p> Spore Print Color: {handleNullCharacteristics(characteristics.sporePrintColor)}</p>
              <p> Mushroom Cap Shape: {handleNullCharacteristics(characteristics.mushroomCapShape)}</p>
              <p> Hymenium Attachment: {handleNullCharacteristics(characteristics.hymeniumAttachment)}</p>
              <p> Mushroom Ecological Type: {handleNullCharacteristics(characteristics.mushroomEcologicalType)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <p>
          <strong>Description: </strong>
          {mushroom.description}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
