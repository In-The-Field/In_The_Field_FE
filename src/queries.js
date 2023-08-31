import { gql } from "@apollo/client";

const GET_MUSHROOM_MATCHES = gql`
  query GetMushroomMatches($image: String!) {
    mushrooms(image: $image) {
      id
      probability
      psychoactive
      apiId
      commonName
      latinName
      edibility
      photo
      photoCitation
      characteristics {
        hymeniumType
        stipeCharacter
        sporePrintColor
        mushroomCapShape
        hymeniumAttachment
        mushroomEcologicalType
      }
      lookAlikes {
        name
      }

      taxonomies {
        genus
        order
        family
        phylum
        kingdom
      }
      
      description
    }
  }
`;

export default GET_MUSHROOM_MATCHES


