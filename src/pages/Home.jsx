import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Cinema from "../components/Cinema";
import Benefit from "../components/Benefit";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Cinema />
      <Benefit />
      <Subscribe />
      <Footer />
    </div>
  );
}
