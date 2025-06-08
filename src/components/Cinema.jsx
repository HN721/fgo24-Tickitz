import React from "react";
import Movielist from "./Movielist";
import Button from "./Button";
import { ArrowLeftCircle, ArrowRightCircleIcon } from "lucide-react";

export default function Cinema() {
  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <p className="font-display font-medium text-primary text-2xl sm:text-3xl md:text-4xl">
          Now Showing in Cinemas
        </p>

        <div className="flex gap-2">
          <ArrowLeftCircle className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600 hover:text-black cursor-pointer" />
          <ArrowRightCircleIcon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-600 hover:text-black cursor-pointer" />
        </div>
      </div>

      {/* Movie List */}
      <div className="w-full overflow-hidden">
        <div className="mx-auto flex flex-col items-center gap-6 max-w-full">
          <Movielist classType="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 px-1 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200" />

          <Button className="text-sm sm:text-base mb-4 bg-secondary px-4 py-2 text-white hover:bg-brand hover:text-font-secondary">
            VIEW ALL
          </Button>
        </div>
      </div>
    </section>
  );
}
