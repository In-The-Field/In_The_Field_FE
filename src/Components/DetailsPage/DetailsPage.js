import React from "react";
import "./DetailsPage.css";
import {  useParams, redirect } from "react-router-dom";
import ToggleSave from "../ToggleSave/ToggleSave";
import { handleNoLookAlikes, handleNullCharacteristics } from "../../utils";
import { useToggleSave } from '../../ToggleSaveContext';
import { GET_MUSHROOM_DETAILS} from "../../queries"
import { useQuery } from '@apollo/client';


const DetailsPage = () => {
  console.log('hello')

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
  console.log("dat.msuhroom",data.mushroom)
  const {id, description, edibility, photo, commonName, latinName, psychoactive} = data.mushroom
  const lookAlikes = data.mushroom.lookAlikes

  const lookAlikesValue = handleNoLookAlikes(lookAlikes);
 
  console.log(data.taxonomy)
  const { genus, order, kingdom, phylum, family } = data.mushroom.taxonomies[0]

  const {hymeniumType, stipeCharacter, sporePrintColor, mushroomCapShape, hymeniumAttachment, mushroomEcologicalType} = data.mushroom.characteristics[0]
  console.log(mushroomId)


  
  return (
    <div className="details-container">
      <div className="grid-container">
        <div className="image-latin-common-container">
          <div className="pic">
            <div className="name-holder">
              <h2 className="latin-name">{latinName}</h2>
              <p>{commonName}</p>
            </div>
            <img className="details-image" src={photo} alt="mushroom" />
            <div className="save-detail">
            <ToggleSave
          mushroomId={id}
          // isSavedInitially={isToggled}
          // onToggle={(mushroomId, isToggled) => toggle()}
          // isToggled={isToggled} 
          // toggle={toggle} 
        />
      </div>
    </div>
          <div className="latin-common-edibility-taxonomy">
            <div className="taxonomy-edibility-lookalike-psychoactive">
              <div className="taxonomy">
                <h3>Taxonomy:</h3>
                <p>Genus: {genus}</p>
                <p>Order: {order}</p>
                <p>Family: {family}</p>
                <p>Phylum: {phylum}</p>
                <p> Kingdom: {kingdom}</p>
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
              <p> Hymenium Type: {handleNullCharacteristics(hymeniumType)}</p>
              <p> Stipe Character: {handleNullCharacteristics(stipeCharacter)}</p>
              <p> Spore Print Color: {handleNullCharacteristics(sporePrintColor)}</p>
              <p> Mushroom Cap Shape: {handleNullCharacteristics(mushroomCapShape)}</p>
              <p> Hymenium Attachment: {handleNullCharacteristics(hymeniumAttachment)}</p>
              <p> Mushroom Ecological Type: {handleNullCharacteristics(mushroomEcologicalType)}</p>
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

export default DetailsPage;
