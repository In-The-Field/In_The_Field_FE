import { gql } from "@apollo/client";

export const TOGGLE_SAVE_MUSHROOM = gql`
mutation saveUserMushrooms($userId: ID!, $mushroomId: ID!) {
  saveUserMushrooms(input:{userId: $userId, mushroomId: $mushroomId}) {
    userMushroom {
      id
      isSaved
    }
    user {
      id
      name
      email
    }
    mushroom {
      id
      commonName
      latinName
      apiId
    }
  }
}

`;



// Query
export const GET_MUSHROOM_MATCHES = gql`
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
