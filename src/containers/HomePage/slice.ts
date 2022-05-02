import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
    topAirships: [],
}

export const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setTopAirships: (state, action)=> {
            state.topAirships = action.payload;
        }
    }
});

export const { setTopAirships } = homePageSlice.actions;
export default homePageSlice.reducer;