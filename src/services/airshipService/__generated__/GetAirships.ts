/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAirships
// ====================================================

export interface GetAirships_airships {
  __typename: "Airship";
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  gas: string;
  capacity: string;
  speed: string;
  thumbnailSrc: string;
}

export interface GetAirships {
  airships: GetAirships_airships[];
}
