// features/booking/AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Auth: {},
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.Auth = action.payload;
      return state;
    },
    UpdateAction: (state, action) => {
      state.Auth.user = action.payload;
      return state;
    },
    Logout: (state) => {
      state.Auth = {};
    },
  },
});

export const { Login, Logout, UpdateAction } = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;

export default AuthReducer;
