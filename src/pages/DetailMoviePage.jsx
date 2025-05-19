import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/detailMovie";
import Footer from "../components/Footer";
import BookTicket from "../components/BookTicket";
import { useParams } from "react-router-dom";

export default function DetailMoviePage() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <DetailMovie id={id} />
      <BookTicket />
      <Footer />
    </>
  );
}
