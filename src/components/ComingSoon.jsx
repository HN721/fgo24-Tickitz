import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function ComingSoon() {
  const [movies, setMovies] = useState([]);
  const genres = ["ACTION", "ADVENTURE", "COMEDY", "SCI-FI"];

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await fetch("http://localhost:8888/movie/upcoming");
        const data = await res.json();
        if (data.success) {
          setMovies(data.results);
        } else {
          console.error("Gagal mengambil data upcoming:", data.message);
        }
      } catch (error) {
        console.error("Error fetch /movie/upcoming:", error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="py-8">
      <div className="flex flex-col items-center">
        {/* Mobile Title */}
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
        <div className="hidden md:flex justify-center mt-8 w-full">
          <div className="flex overflow-x-auto space-x-6 px-4 pb-4 scrollbar-hide">
            {movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-48 flex flex-col">
                <div className="relative mb-2">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-[288px] object-cover rounded-lg border border-gray-200"
                  />
                </div>
                <h3 className="font-bold text-center text-sm line-clamp-2">
                  {movie.title}
                </h3>
                <div className="flex justify-center mt-2">
                  <span className="bg-brand text-secondary px-3 py-1 rounded-full text-xs">
                    {movie.releaseDate.slice(0, 10)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="ml-6 flex flex-col justify-start mt-4 max-w-sm">
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
                className="w-full rounded-lg border border-gray-200 mb-2 object-cover h-48"
              />
              <h3 className="font-bold text-center text-sm">{movie.title}</h3>
              <span className="mt-2 bg-brand text-secondary px-3 py-1 rounded-full text-xs">
                {movie.releaseDate}
              </span>
            </div>
          ))}
        </div>

        {/* Genre + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 mt-10 w-full max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {genres.map((genre, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-secondary text-white"
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
              <Button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
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
