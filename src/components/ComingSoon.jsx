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
    <div className=" py-8">
      <div className="flex flex-col items-center">
        <div className="block md:hidden text-center px-4 mb-6">
          <div className="bg-brand text-secondary px-4 py-2 rounded-full font-medium text-sm inline-block mb-3">
            UPCOMING MOVIES
          </div>
          <h2 className="font-med text-3xl font-display">
            Exciting Movie
            <br />
            Coming Soon
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center mt-8">
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

        {/* Mobile Layout */}
        <div className="flex md:hidden overflow-x-auto px-4 space-x-4 w-full">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-48 flex flex-col items-center"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full rounded-lg border border-gray-200 mb-2"
              />
              <h3 className="font-bold text-center text-sm">{movie.title}</h3>
              <span className="mt-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                {movie.releaseDate}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 mt-10 w-full max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {genres.map((genre, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-orange-600 text-white"
                    : "bg-white text-gray-800 border border-gray-300"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <Button className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                <ChevronRight size={20} className="text-white" />
              </Button>
            </div>
            <button className="flex items-center px-5 py-3 bg-secondary text-white rounded-full text-sm font-medium">
              <span>VIEW ALL</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
