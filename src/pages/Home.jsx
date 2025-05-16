import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Cinema from "../components/Cinema";
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e469d3d7";

async function getMovie() {
  const res = await fetch(url);
  const result = await res.json();
  console.log(result);
  return result;
}
export default function Home() {
  return (
    <div>
      <Navbar />
      <Title />
      <Cinema />
    </div>
  );
}
