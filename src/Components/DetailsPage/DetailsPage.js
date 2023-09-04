import React from "react";
import "./DetailsPage.css";
import {  useParams, redirect } from "react-router-dom";
import ToggleSave from "../ToggleSave/ToggleSave";
import { handleNoLookAlikes, handleNullCharacteristics } from "../../utils";
import { GET_MUSHROOM_DETAILS} from "../../queries"
import { useQuery } from '@apollo/client';
import PropTypes from "prop-types";

const DetailsPage = ({ setIsSaved }) => {
  let mushroomId = useParams().id

  const { loading, error, data } = useQuery(GET_MUSHROOM_DETAILS, {
    variables: { id: mushroomId},
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Data not available.</div>;
  }

  const {id, description, edibility, photo, commonName, latinName, psychoactive} = data.mushroom;
  const { genus, order, kingdom, phylum, family } = data.mushroom.taxonomies[0];
  const {hymeniumType, stipeCharacter, sporePrintColor, mushroomCapShape, hymeniumAttachment, mushroomEcologicalType} = data.mushroom.characteristics[0];
  const lookAlikes = data.mushroom.lookAlikes;
  const lookAlikesValue = handleNoLookAlikes(lookAlikes);

  return (
    <div className="details-container">
      <div className="name-holder">
        <h2 className="latin-name">{latinName}</h2>
        <p>{commonName}</p>
      </div>
      <div className="grid-container">
        <div className="image-latin-common-container">
          <div className="pic">
            <img className="details-image" src={photo} alt="mushroom" />
            <div className="save-detail">
              
            <ToggleSave
          setIsSaved={setIsSaved}
          mushroomId={id}
        />
      </div>
    </div>
          <div className="latin-common-edibility-taxonomy">
            <div className="taxonomy-edibility-lookalike-psychoactive">
              <div className="taxonomy">
                <h3>Taxonomy:</h3>
                <p> <strong> Genus: </strong> {genus}</p>
                <p> <strong> Order: </strong> {order}</p>
                <p> <strong> Family: </strong> {family}</p>
                <p> <strong> Phylum: </strong> {phylum}</p>
                <p> <strong> Kingdom: </strong> {kingdom}</p>
              </div>
              <div className="info">
                <p>
                  <strong>Edibility: </strong> {edibility || "not provided"}{" "}
                </p>
                <p>
                  <strong>Lookalike: </strong> {lookAlikesValue}
                </p>
                <p>
                  <strong>Psychoactive: </strong>{" "}
                  {psychoactive === null ? "not provided" : psychoactive ? "true" : "false"}
                </p>
              </div>
            </div>
            <div className="characteristics">
              <h3>Characteristics:</h3>
              <p> <strong> Hymenium Type: </strong> {handleNullCharacteristics(hymeniumType)}</p>
              <p> <strong> Stipe Character: </strong> {handleNullCharacteristics(stipeCharacter)}</p>
              <p> <strong> Spore Print Color: </strong> {handleNullCharacteristics(sporePrintColor)}</p>
              <p> <strong> Mushroom Cap Shape: </strong> {handleNullCharacteristics(mushroomCapShape)}</p>
              <p> <strong> Hymenium Attachment: </strong> {handleNullCharacteristics(hymeniumAttachment)}</p>
              <p> <strong> Mushroom Ecological Type: </strong> {handleNullCharacteristics(mushroomEcologicalType)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <p>
          <strong>Description: </strong>
          {description}
        </p>
      </div>
            
    </div>
  );
};

DetailsPage.propTypes = {
  setIsSaved: PropTypes.func.isRequired,
};

export default DetailsPage;
