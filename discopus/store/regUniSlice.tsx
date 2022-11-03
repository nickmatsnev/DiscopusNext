import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
// Type for our state
export interface University {
  name: string;
}

// Initial state
const initialState: University = {
  name: "no uni"
};

// Actual Slice
export const regUniSlice = createSlice({
  name: "reguni",
  initialState,
  reducers: {

    // Action to set the authentication status
    setName(state, action) {
      state.name = action.payload;
    }
  },
});

export const { setName } = regUniSlice.actions;

export const selectName = (state: AppState) => state.reguni.name;
export default regUniSlice.reducer;