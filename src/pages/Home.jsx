import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Cinema from "../components/Cinema";
import Benefit from "../components/Benefit";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Navbar />
      <Title />
      <Cinema />
      <Benefit />
      <ComingSoon />
      <Subscribe />
      <Footer />
    </div>
  );
}
