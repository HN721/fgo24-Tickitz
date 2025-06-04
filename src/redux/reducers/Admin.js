// features/booking/AuthSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Admin: {
    email: "Admin@gmail.com",
    password: "12345678",
  },
};

const AdminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    Login: (state, action) => {
      if (action.payload !== state.Auth) {
        return false;
      }
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

export const { Login, Logout, UpdateAction } = AdminSlice.actions;
const AdminReducer = AdminSlice.reducer;

export default AdminReducer;
