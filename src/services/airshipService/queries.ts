import { gql } from "@apollo/client";

export const GET_ALL_AIRSHIPS = gql`
  query GetAirships {
    airships {
      name
      dailyPrice
      monthlyPrice
      gas
      capacity
      speed
      thumbnailSrc
    }
  }
`;
