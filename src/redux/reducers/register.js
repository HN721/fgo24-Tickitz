import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UsersSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    AddUserAction: (state, action) => {
      const isEmailUsed = state.user.find(
        (u) => u.email === action.payload.email
      );

      if (!isEmailUsed) {
        state.user.push({
          ...action.payload,
          id: Math.floor(Math.random() * 100),
        });
      } else {
        state.error = "Email already used";
      }
    },
  },
});

export const { AddUserAction } = UsersSlice.actions;
const UserReducer = UsersSlice.reducer;

export default UserReducer;
