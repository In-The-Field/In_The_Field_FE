import inkyCapImage from "../images/inky-cap-720x1196.jpeg";
import mushroom2Image from "../images/32848123.wanZmtcJ.jpg";
import russulaImage from "../images/russula-5-720x739.jpeg";
import birchBoleteImage from "../images/birch-bolete.jpeg";

const mockMushroomCards = [
  {
    id: 1,
    probability: 0.75,
    latinName: "Agaricus bisporus",
    commonNames: "Button Mushroom",
    image: inkyCapImage,
  },
  {
    id: 2,
    probability: 0.95,
    latinName: "Amanita muscaria",
    commonNames: "Fly Agaric",
    image: mushroom2Image,
  },
  {
    id: 3,
    probability: 0.80,
    latinName: "Boletus edulis",
    commonNames: "Porcini",
    image: russulaImage,
  },
  {
    id: 4,
    probability: 0.60,
    latinName: "Cantharellus cibarius",
    commonNames: "Chanterelle",
    image: birchBoleteImage,
  },
];

export default mockMushroomCards;
