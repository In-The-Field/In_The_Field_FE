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
      taxonomy {
        genus
        order
        family
        phylum
        kingdom
      }
      characteristic {
        hymeniumType
        stipeCharacter
        sporePrintColor
        mushroomCapShape
        hymeniumAttachment
        mushroomEcologicalType
      }
      lookAlike {
        name
      }
      description
    }
  }
`;

export default GET_MUSHROOM_MATCHES


