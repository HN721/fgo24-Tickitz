import React, { useContext, useEffect, useState } from "react";

import { getMoviebyId } from "../services/fetchMovie";

export default function DetailMovie({ id, setData, setLoading }) {
  const [movies, setMovies] = useState();
  console.log("movie background", movies);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getMoviebyId(id);
        setMovies(res);
        setData(res);
      } catch (err) {
        console.error("Failed to fetch movie:", err);
        setMovies(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id, setLoading]);
  if (!movies) {
    return <p>Data Tidak Ditemukan</p>;
  } else {
    return (
      <div className="relative w-full h-auto pt-15 mb-20">
        <div
          className="w-full h-96 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: movies.background?.startsWith("http")
              ? `url(${movies.background})`
              : `url(http://localhost:8888/uploads/profile/${movies.background})`,
          }}
        >
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center px-4 sm:px-6 md:px-12 mt-[-200px] gap-8 z-10">
          <img
            src={
              movies.poster.startsWith("http")
                ? movies.poster
                : `http://localhost:8888/uploads/profile/${movies.poster}`
            }
            alt="Poster"
            className="rounded-lg sm:h-[400px]  shadow-lg"
          />

          <div className="lg:text-white flex flex-col gap-4 w-full max-w-3xl">
            <h1 className="text-3xl font-bold">{movies.title}</h1>
            <p className="text-sm">{movies.synopsis}</p>

            <div className="flex gap-2 flex-wrap">
              {movies.genres?.map((genre) => (
                <span
                  key={genre}
                  className="bg-white/20 border lg:border-white lg:text-white text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="flex text-black flex-wrap gap-9 mt-15">
              <div>
                <p className="font-semibold">Release Date</p>
                <p>{movies.releaseDate}</p>
              </div>
              <div>
                <p className="font-semibold">Duration</p>
                <p>{movies.duration} Minute</p>
              </div>
              <div>
                <p className="font-semibold">Directed By</p>
                {movies.directors?.map((name) => (
                  <p>{name}</p>
                ))}
              </div>
              <div className="max-w-sm">
                <p className="font-semibold">Cast</p>
                <p>{movies.casts?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
