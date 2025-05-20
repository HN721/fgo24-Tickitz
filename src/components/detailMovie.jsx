import React, { useEffect, useState } from "react";
import poster from "../assets/poster.png";
import background from "../assets/jumbo.png";
import { getMovieCredits, getMoviebyId } from "../services/fetchMovie";

export default function DetailMovie({ id }) {
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState([]);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await getMoviebyId(id);
      const credits = await getMovieCredits(id);
      console.log(credits);
      setMovies(res);
      const directorData = credits.crew.find(
        (person) => person.job === "Director"
      );
      setDirector(directorData?.name || "Unknown");

      const castData = credits.cast.slice(0, 6).map((person) => person.name);
      setCast(castData);
      console.log(castData);
      console.log(directorData);
    };
    getData();
  }, []);

  console.log(movies);
  if (!movies) {
    return <p>Data Tidak Ditemukan</p>;
  } else {
    return (
      <div className="relative w-full h-[520px] mt-20  mb-50 ">
        <div
          className="w-full h-full bg-cover rounded-4xl bg-center flex items-end justify-end pb-10 pr-40"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              movies.belongs_to_collection?.backdrop_path ??
              movies.backdrop_path
            })`,
          }}
        >
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
        <div className="w-[80rem] h-[29.125rem]">
          <div className="absolute top-60 px-6 md:px-12 py-6 flex items-end gap-6">
            <img
              src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
              alt="Poster"
              className=" rounded-lg shadow-lg"
            />
          </div>
          <div className="detail-container flex w-[59rem] ml-100 mt-6 items-start gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Release Date</p>
                <p>{movies.release_date}</p>
              </div>
              <div>
                <p>Duration</p>
                <p>{movies.runtime}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <p>Directed By</p>
                <p>{director}</p>
              </div>
              <div className="flex flex-col max-w-90">
                <p>Cast</p>
                <p>{cast.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 flex items-end gap-6">
<img
  src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
  alt="Poster"
  className="w-28 md:w-40 rounded-lg shadow-lg"
/>


</div> */
}

{
  /* <div className="text-white max-w-2xl">
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
</div> */
}
