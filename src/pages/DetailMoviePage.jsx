import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DetailMovie from "../components/detailMovie";
import Footer from "../components/Footer";
import BookTicket from "../components/BookTicket";
import { ScrollRestoration, useParams } from "react-router-dom";
import { DataContext } from "../App";

export default function DetailMoviePage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { setBookings } = useContext(DataContext);
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setBookings(data);
    }
  }, [data, setBookings]);
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <DetailMovie setData={setData} id={id} />
      <BookTicket setData={setData} />
      <Footer />
    </>
  );
}
