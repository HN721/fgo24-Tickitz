import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieSeatBooking from "../components/Seat";

export default function SeatPage() {
  return (
    <div>
      <Navbar />;
      <MovieSeatBooking />
      <Footer />
    </div>
  );
}
