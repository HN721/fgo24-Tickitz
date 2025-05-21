import React, { useContext, useEffect, useState } from "react";

import { getMovieCredits, getMoviebyId } from "../services/fetchMovie";
import { DataContext } from "../App";

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
      <div className="relative w-full h-[520px] mt-20  mb-50 ">
        <div
          className="w-full h-full bg-cover rounded-4xl bg-center bg-gradient-to-b flex items-end justify-end pb-10 pr-5"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              movies.belongs_to_collection?.backdrop_path ??
              movies.backdrop_path
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/20 rounded-4xl"></div>

          <div className="flex flex-col justify-end w-[53.1875rem] items-start gap-4">
            <h1 className="text-white text-3xl font-bold">{movies.title}</h1>
            <p className="text-white text-sm">{movies.overview}</p>
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
          </div>
        </div>
        <div className="w-auto h-auto">
          <div className="absolute top-60 px-6 md:px-12 py-6 flex items-end gap-6">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              alt="Poster"
              className=" rounded-lg h-105 shadow-lg"
            />
          </div>
          <div className="detail-container flex w-auto ml-100 mt-6 items-start gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Release Date</p>
                <p>{movies.release_date}</p>
              </div>
              <div>
                <p>Duration</p>
                <p>{movies.runtime} Minute</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Directed By</p>
                <p>{director}</p>
              </div>
              <div className="flex flex-col max-w-90">
                <p>Cast</p>
                <p>{cast?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
