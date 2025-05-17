import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Cinema from "../components/Cinema";
import Benefit from "../components/Benefit";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Cinema />
      <Benefit />
      <Subscribe />
    </div>
  );
}
