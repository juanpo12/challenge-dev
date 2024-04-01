import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $status: String, $species: String, $gender: String, $page: Int!) {
    characters(filter: {name: $name, status: $status, species: $species, gender: $gender}, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        gender
        status
        origin {
          name
        }
      }
    }
  }
`;