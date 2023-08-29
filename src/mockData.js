import agaricusBisporus from '../src/Components/images/agaricus-bisporus-1.jpg';
import amanitaMuscaria from '../src/Components/images/amanita-muscaria.jpg'
import chantrelle from '../src/Components/images/chantrelle.jpeg'
import porcini from '../src/Components/images/porcini.jpeg'

const mockMushroomCards = [
  {
    id: 5,
    probability: 0.755656,
    latinName: "Agaricus bisporus",
    commonNames: "Button Mushroom, White Mushroom",
    image: agaricusBisporus,
  },
  {
    id: 6,
    probability: 0.95565,
    latinName: "Amanita muscaria",
    commonNames: "Fly Agaric, Fly Amanita",
    image: amanitaMuscaria,
  },
  {
    id: 7,
    probability: 0.80122,
    latinName: "Boletus edulis",
    commonNames: "Porcini, King Bolete",
    image: porcini,
  },
  {
    id: 8,
    probability: 0.6454,
    latinName: "Cantharellus cibarius",
    commonNames: "Chanterelle, Golden Chanterelle",
    image: chantrelle,
  },
];

export { mockMushroomCards }