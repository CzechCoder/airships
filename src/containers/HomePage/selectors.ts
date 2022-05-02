import { createSelector } from "reselect";
import { IRootAppState } from "../../typings";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopAirships = createSelector(
  selectHomePage,
  (homePage) => homePage.topAirships
);
