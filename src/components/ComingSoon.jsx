import React from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import dasim from "../assets/dasim.png";
import toward from "../assets/toward.png";
import godaan from "../assets/godaan.png";
import gundik from "../assets/gundik.png";
import Button from "./Button";
export default function ComingSoon() {
  const movies = [
    {
      id: 1,
      title: "TOWARDS THE LIGHT",
      poster: toward,
      releaseDate: "15 May 2025",
    },
    {
      id: 2,
      title: "GODAAN SETAN YANG TERKUTUK",
      poster: godaan,
      releaseDate: "15 May 2025",
    },
    {
      id: 3,
      title: "DASIM",
      poster: dasim,
      releaseDate: "15 May 2025",
    },
    {
      id: 4,
      title: "GUNDIK",
      poster: gundik,
      releaseDate: "22 May 2025",
    },
  ];

  const genres = ["ACTION", "ADVENTURE", "COMEDY", "SCI-FI"];

  return (
    <div className="bg-back">
      <div className="flex flex-col">
        <div className="flex justify-center mt-8">
          <div className="flex gap-12 max-w-[calc(8rem*5+1.5rem*3)]">
            {movies.map((movie) => (
              <div key={movie.id} className="flex flex-col">
                <div className="relative mb-2">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
                <h3 className="font-bold text-center text-sm">{movie.title}</h3>
                <div className="flex justify-center mt-2">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                    {movie.releaseDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-6 flex flex-col justify-start mt-4">
            <div className="bg-brand text-secondary px-4 py-2 rounded-full font-large text-xl font-display mb-4">
              UPCOMING MOVIES
            </div>
            <h2 className="font-med text-6xl font-display mb-2">
              Exciting Movie
              <br />
              Coming Soon
            </h2>
          </div>
        </div>
        <div className="flex justify-around mt-12 items-center ">
          <div className="flex space-x-3 ">
            {genres.map((genre, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-800 border border-gray-300"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <Button className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                <ChevronRight size={20} className="text-white" />
              </Button>
            </div>

            <Button className="flex items-center px-5 py-3 bg-secondary text-white rounded-full text-sm font-medium">
              <span>VIEW ALL</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
