import React, { useContext, useEffect, useState } from "react";

import { getMovieCredits, getMoviebyId } from "../services/fetchMovie";

export default function DetailMovie({ id, setData }) {
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await getMoviebyId(id);
      const credits = await getMovieCredits(id);
      console.log(credits);

      setMovies(res);
      setData((prev) => ({
        ...prev,
        movieName: res.title,
        IdMovie: res.id,
        genre: res.genres,
        price: 50000,
        img: `https://image.tmdb.org/t/p/original${
          res.belongs_to_collection?.backdrop_path ?? res.backdrop_path
        }`,
      }));
      const directorData = credits.crew?.find(
        (person) => person.job === "Director"
      );
      setDirector(directorData?.name || "Unknown");

      const castData = credits.cast?.slice(0, 6).map((person) => person.name);
      setCast(castData);
    };
    getData();
  }, []);
  if (!movies) {
    return <p>Data Tidak Ditemukan</p>;
  } else {
    return (
      <div className="relative w-full h-auto pt-15 mb-20">
        <div
          className="w-full h-[520px] bg-cover rounded-4xl bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              movies.belongs_to_collection?.backdrop_path ??
              movies.backdrop_path
            })`,
          }}
        >
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative flex px-6 md:px-12 mt-[-200px] gap-8 z-10">
          <img
            src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
            alt="Poster"
            className="rounded-lg h-[400px] shadow-lg"
          />

          <div className="text-white flex flex-col gap-4 w-full max-w-3xl">
            <h1 className="text-3xl font-bold">{movies.title}</h1>
            <p className="text-sm">{movies.overview}</p>

            <div className="flex gap-2 flex-wrap">
              {movies.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-white/20 border border-white text-white text-xs md:text-sm px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="flex text-black flex-wrap gap-9 mt-15">
              <div>
                <p className="font-semibold">Release Date</p>
                <p>{movies.release_date}</p>
              </div>
              <div>
                <p className="font-semibold">Duration</p>
                <p>{movies.runtime} Minute</p>
              </div>
              <div>
                <p className="font-semibold">Directed By</p>
                <p>{director}</p>
              </div>
              <div className="max-w-sm">
                <p className="font-semibold">Cast</p>
                <p>{cast?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
