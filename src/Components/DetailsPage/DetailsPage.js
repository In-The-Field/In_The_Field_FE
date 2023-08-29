import React from "react";
import "./DetailsPage.css";
import logo from "../../images/logo.png";

const DetailsPage = () => {
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
            {/* <h4>Edibility:</h4> */}
            <p><strong>Edibility: </strong> Edible when cooked</p>
            {/* <h4>Characteristics:</h4> */}
            <p><strong>Characteristics: </strong>
              dict - hymenium attachment, hymenium type, mushroom cap shape,
              mushroom ecological type, spore print color, stipe character
            </p>
            {/* <h4>Lookalike:</h4> */}
            <p>
              <strong>Lookalike: </strong>list of dicts - mushrooms that are frequently confused with the
              suggested species; each taxon contains entity_id, name and url
            </p>
            {/* <h4>Psychoactive:</h4> */}
            <p>
             <strong>Psychoactive: </strong>this mushroom causes poisoning that affects the nervous system
            </p>
          </div>
        </div>
      </div>
      {/* Description is below everything else */}
      <div className="description">
        <p><strong>Description:</strong> Amanita parcivolvata also known as ringless false fly
          amanita, is a fungus that produces fruit bodies that vaguely resemble
          those of Amanita muscaria. It is differentiated, however, by its lack
          of an annulus, by the volval deposits on its stipe/base, and by its
          pileal striations. It occasionally lacks a stipe bulb entirely,
          instead just tapering to a point in the ground with powdery volval
          deposits on its surface. It ranges from 3–12 cm (1.2–4.7 in) in length
          and is occasional to common in the Southeastern United States,
          occurring primarily in Quercus forests though it has been observed in
          forests with a mix of conifers and oaks.
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
