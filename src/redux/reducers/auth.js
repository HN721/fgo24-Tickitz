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
    Logout: (state, action) => {
      state.Auth = [];
    },
  },
});

export const { Login, Logout } = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;

export default AuthReducer;
