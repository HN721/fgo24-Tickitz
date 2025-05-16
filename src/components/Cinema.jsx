import React from "react";
import arrow from "../assets/arrow.svg";
import arrowRight from "../assets/arrow-right.svg";

export default function Cinema() {
  return (
    <>
      <section className="mt-12 mx-6">
        <div className="flex justify-between items-center">
          <img src={arrow} />
          <p className="font-display font-med text-primary text-4xl">
            Now Showing in Cinemas
          </p>
          <img src={arrowRight} />
        </div>
      </section>
      c
    </>
  );
}
