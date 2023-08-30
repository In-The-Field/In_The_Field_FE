import React from "react";
import "./DetailsPage.css";
import logo from '../images/logo.png';

const DetailsPage = ({}) => {
  return (
    <div className="details-container">
      <div className="image-latin-common-container">
        <div className="pic">
          <img className="details-image" src={logo} alt="Logo" />
        </div>
        <div className="latin-common-edibility-taxonomy">
          <div className="name-taxonomy-cont">
            <div className="name-holder">
              <h2>Amanita parcivolvata</h2>
              <p>False Caesar's Mushroom, Ringless False Fly Agaric</p>
            </div>
            <div className="taxonomy">
              <h3>Taxonomy:</h3>
              <p>Genus: "Amanita",</p>
              <p>Order: "Agraicales",</p>
              <p>Family: "Amanitaceae",</p>
              <p>Phylum: "Basidiomycota",</p>
              <p> Kingdom: "Fungi"</p>
            </div>
          </div>
          <div className="info">
            <p><strong>Edibility: </strong> Edible when cooked</p>
            <p><strong>Characteristics: </strong>
              dict - hymenium attachment, hymenium type, mushroom cap shape,
              mushroom ecological type, spore print color, stipe character
            </p>
            <p>
              <strong>Lookalike: </strong>list of dicts - mushrooms that are frequently confused with the
              suggested species; each taxon contains entity_id, name and url
            </p>
            <p>
             <strong>Psychoactive: </strong>this mushroom causes poisoning that affects the nervous system
            </p>
          </div>
        </div>
      </div>
      <div className="description">
        <p><strong>Description:</strong> {description}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
