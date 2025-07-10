import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const UsersSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    AddUserAction: (state, action) => {
      state.user.push(action);
    },
    UpdateUserAction: (state, action) => {
      const index = state.user.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.user[index] = { ...state.user[index], ...action.payload };
      }
    },
    DeleteUserAction: (state) => {
      state.user = [];
    },
  },
});

export const { AddUserAction, UpdateUserAction, DeleteUserAction } =
  UsersSlice.actions;
const UserReducer = UsersSlice.reducer;

export default UserReducer;
