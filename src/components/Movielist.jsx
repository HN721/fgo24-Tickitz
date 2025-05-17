import React, { useEffect, useState } from "react";
import getData from "../services/fetchMovie";
/**
 * Peta ID genre ke nama genre berdasarkan standar TMDB (The Movie Database).
 * @type {Object<number, string>}
 */
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
/**
 * Komponen `Movielist` bertanggung jawab untuk menampilkan daftar film populer dari API TMDB.
 * Hanya menampilkan 4 film dalam satu baris horizontal dan dapat discroll ke kanan jika lebih.
 *
 * @component
 * @example
 * return (
 *   <Movielist />
 * )
 *
 * @returns {JSX.Element} Elemen React yang menampilkan daftar film dengan poster, judul, dan genre.
 */
/**
 * @param {Array} movie Harus Berisi Array Pf Object
 * @returns
 */
export default function Movielist({ classType }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await getData();
      setMovie(res);
    };
    fetchMovie();
  }, []);

  return (
    <div className="py-6">
      <div className="relative">
        <div className={classType}>
          {movie.map((item) => (
            <div key={item.id} className="relative flex-none w-48 rounded-lg  ">
              {/* Badge "Recommended" */}
              <span className="absolute -top-1 -left-0 px-2 py-1 text-xs font-md font-display text-secondary bg-brand rounded-tl-xl rounded-br-xl shadow-sm z-10">
                Recommended
              </span>

              {/* Poster */}
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/192x288?text=Poster"
                }
                alt={item.title}
                className="w-full h-72 object-cover rounded-lg"
              />

              {/* Movie title */}
              <div className="p-2 text-center">
                <h3 className="text-sm font-bold uppercase truncate">
                  {item.title}
                </h3>

                {/* Genre badges */}
                <div className="flex justify-center space-x-2 mt-2 flex-wrap">
                  {item.genre_ids.slice(0, 2).map((genreId) => (
                    <span
                      key={genreId}
                      className="text-xs text-gray-700 bg-gray rounded-full px-2 py-0.5"
                    >
                      {genreMap[genreId] || "Unknown"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
