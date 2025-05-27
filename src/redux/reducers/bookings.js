// features/booking/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    clearBooking: (state, action) => {
      state.bookings = [];
    },
  },
});

export const { addBooking, clearBooking } = bookingSlice.actions;
const BookingReducer = bookingSlice.reducer;

export default BookingReducer;
