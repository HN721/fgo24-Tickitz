import React, { useEffect, useState } from "react";
import { getData } from "../services/fetchMovie";
import { useNavigate } from "react-router-dom";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export default function Movielist({ classType, movies }) {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!movies) {
      const fetchMovie = async () => {
        const res = await getData();
        console.log(res);
        setMovie(res);
      };
      fetchMovie();
    }
  }, [movies]);

  const displayedMovies = movies || movie;
  function handleClick(id) {
    navigate(`/Detail-movie/${id}`);
  }
  return (
    <div className="py-6">
      <div className="relative">
        <div className={classType}>
          {displayedMovies.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No movies found.
            </p>
          ) : (
            displayedMovies.map((item) => (
              <div
                key={item.id}
                className="relative flex-none w-48 rounded-lg group overflow-hidden"
              >
                {/* Label */}
                <span className="absolute -top-1 -left-0 px-2 py-1 text-xs font-md font-display text-secondary bg-brand rounded-tl-xl rounded-br-xl shadow-sm z-10">
                  Recommended
                </span>

                {/* Poster */}
                <img
                  src={
                    item.poster.startsWith("http")
                      ? item.poster
                      : `http://localhost:8888/uploads/profile/${item.poster}`
                  }
                  alt={item.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-72 backdrop-blur-sm bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <button
                    onClick={() => handleClick(item.id)}
                    className="mb-2 px-4 py-1 border font-display border-white rounded-full text-white text-lg font-lg hover:bg-white hover:text-black transition"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-1 rounded-full font-display bg-secondary text-white text-lg font-lg hover:bg-hover transition">
                    Buy Ticket
                  </button>
                </div>

                <div className="p-2 text-center bg-white">
                  <h3 className="text-sm font-bold uppercase truncate">
                    {item.title}
                  </h3>
                  <div className="flex justify-center space-x-2 mt-2 flex-wrap">
                    {(item.genres || []).slice(0, 2).map((genreId) => (
                      <span
                        key={genreId}
                        className="text-xs text-gray-700 bg-gray rounded-full px-2 py-0.5"
                      >
                        {genreId || "Unknown"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
