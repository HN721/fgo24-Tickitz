import React from "react";
import arrowRight from "../assets/arrow-right.svg";
import Movielist from "./Movielist";
import Button from "./Button";
import arrow from "../assets/arrow.svg";
import {
  ArrowBigRight,
  ArrowLeftCircle,
  ArrowRightCircleIcon,
} from "lucide-react";

export default function Cinema() {
  return (
    <section className="mt-12 mx-10 md:mx-32">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <p className="font-display font-med text-primary text-2xl md:text-4xl">
          Now Showing in Cinemas
        </p>

        <div className="flex gap-2 justify-between md:self-auto">
          <ArrowLeftCircle width={50} height={50} />
          <ArrowRightCircleIcon width={50} height={50} />
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center gap-6 w-fit">
        <Movielist
          classType="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin 
  max-w-[calc(12rem*2+1.5rem)] 
  md:max-w-[calc(12rem*5+1.5rem*3)] 
  scrollbar-thumb-secondary scrollbar-track-gray-200"
        />{" "}
        <Button className="text-xs mb-4 bg-secondary w-max text-font-white hover:bg-brand hover:text-font-secondary">
          VIEW ALL
        </Button>
      </div>
    </section>
  );
}
