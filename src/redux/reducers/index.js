import { combineReducers } from "@reduxjs/toolkit";
import BookingReducer from "./bookings";
import AuthReducer from "./auth";
import UserReducer from "./register";

const rootReducer = combineReducers({
  booking: BookingReducer,
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
