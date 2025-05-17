import React from "react";
import arrow from "../assets/arrow.svg";
import arrowRight from "../assets/arrow-right.svg";
import Movielist from "./Movielist";
import Button from "./Button";
export default function Cinema() {
  return (
    <>
      <section className="mt-12 mx-6 ">
        <div className="flex justify-between items-center">
          <img src={arrow} />
          <p className="font-display font-med text-primary text-4xl">
            Now Showing in Cinemas
          </p>
          <img src={arrowRight} />
        </div>
        <div className="mx-auto flex flex-col items-center gap-6 w-fit">
          <Movielist />
          <Button className="text-xs bg-secondary w-max text-font-white hover:bg-brand hover:text-font-secondary">
            VIEW ALL
          </Button>
        </div>
      </section>
    </>
  );
}
