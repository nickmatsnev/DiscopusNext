import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
// Type for our state
export interface AuthState {
  authState: boolean;
  email: string;
  password: string;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  email: "noe@ema.il",
  password: "nopassword"
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setEmailState(state, action) {
      state.email = action.payload;
    },
    setPasswordState(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setAuthState, setEmailState, setPasswordState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;
export const selectEmailState = (state: AppState) => state.auth.email;
export const selectPasswordState = (state: AppState) => state.auth.password;

export default authSlice.reducer;