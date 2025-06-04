import { combineReducers } from "@reduxjs/toolkit";
import BookingReducer from "./bookings";
import AuthReducer from "./auth";
import UserReducer from "./register";
import AdminReducer from "./Admin";

const rootReducer = combineReducers({
  booking: BookingReducer,
  auth: AuthReducer,
  user: UserReducer,
  admin: AdminReducer,
});

export default rootReducer;
