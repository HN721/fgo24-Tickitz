import React from "react";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/detailMovie";
import Footer from "../components/Footer";
import BookTicket from "../components/BookTicket";

export default function DetailMoviePage() {
  return (
    <div>
      <Navbar />
      <DetailMovie />
      <BookTicket />
      <Footer />
    </div>
  );
}
