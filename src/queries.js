import { gql } from "@apollo/client";

const GET_MUSHROOM_MATCHES = gql`
  query GetMushroomMatches($image: String!) {
    matches(image: $image) {
      probability
      psychoactive
      apiId
      commonName
      latinName
      edibility
      photo
      photoCitation
      taxonomyp {
        genus
        order
        family
        phylum
        kingdom
      }
      characteristicp {
        hymeniumType
        stipeCharacter
        sporePrintColor
        mushroomCapShape
        hymeniumAttachment
        mushroomEcologicalType
      }
      lookAlikep {
        name
      }
      description
    }
  }
`;

export default GET_MUSHROOM_MATCHES


