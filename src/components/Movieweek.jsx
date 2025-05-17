import React from "react";
import movie from "../assets/movieWeek.png";

export default function Movieweek() {
  return (
    <div className="relative rounded-[64px] overflow-hidden mx-6 mt-25">
      <img
        src={movie}
        alt="Movie Background"
        className="w-full  object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex gap-2 flex-col justify-end p-6">
        <button className="bg-brand text-secondary text-xl font-large font-display px-4 py-1 rounded-full w-max mb-2">
          LIST MOVIE OF THE WEEK
        </button>
        <h2 className="text-white text-3xl font-sm sm:text-2xl ">
          Experience the Magic of Cinema:{" "}
          <span className="text-secondary text-3xl font-large">
            Book Your Tickets Today
          </span>
        </h2>
        <p className="text-white text-[14px] font-display font-small">
          Sign up and get the ticket with a lot of discount
        </p>
      </div>

      {/* Pagination dots */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        <span className="w-3 h-3 rounded-full border border-white"></span>
        <span className="w-3 h-3 rounded-full bg-orange-500 border border-white"></span>
        <span className="w-3 h-3 rounded-full border border-white"></span>
      </div>
    </div>
  );
}
