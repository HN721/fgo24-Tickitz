import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seat from "../components/seat";

export default function SeatPage() {
  return (
    <div>
      <Navbar />;
      <Seat />
      <Footer />
    </div>
  );
}
