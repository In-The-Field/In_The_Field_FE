import agaricusBisporus from './images/agaricus-bisporus-1.jpg';
import amanitaMuscaria from './images/amanita-muscaria.jpg'
import chantrelle from './images/chantrelle.jpeg'
import porcini from './images/porcini.jpeg'

const mockMushroomCards = [
  {
    id: 1,
    probability: 0.755656,
    latinName: "Agaricus bisporus",
    commonNames: "Button Mushroom, White Mushroom",
    image: agaricusBisporus,
  },
  {
    id: 2,
    probability: 0.95565,
    latinName: "Amanita muscaria",
    commonNames: "Fly Agaric, Fly Amanita",
    image: amanitaMuscaria,
  },
  {
    id: 3,
    probability: 0.80122,
    latinName: "Boletus edulis",
    commonNames: "Porcini, King Bolete",
    image: porcini,
  },
  {
    id: 4,
    probability: 0.6454,
    latinName: "Cantharellus cibarius",
    commonNames: "Chanterelle, Golden Chanterelle",
    image: chantrelle,
  },
];

export default mockMushroomCards