import React, { useEffect, useState } from "react";
import poster from "../assets/poster.png";
import background from "../assets/jumbo.png";
import { getMoviebyId } from "../services/fetchMovie";

export default function DetailMovie({ id }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await getMoviebyId(id);
      console.log(res);
      setMovies(res);
    };
    getData();
  }, []);

  console.log(movies);
  if (!movies) {
    return <p>Data Tidak Ditemukan</p>;
  } else {
    return (
      <div className="relative mb-25">
        <div className=" mt-20 md:flex-row bg-black  overflow-hidden rounded-[48px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${
              movies.belongs_to_collection &&
              movies.belongs_to_collection.backdrop_path
                ? movies.belongs_to_collection.backdrop_path
                : movies.backdrop_path
            }`}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-40 z-2  gap-6  text-white flex-1 flex   px-6 py-16">
            <div className="bg-white rounded-[24px] overflow-hidden shadow-xl w-[200px] md:w-[240px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt="Poster"
                className="w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4"></h1>
              <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-4">
                {movies.overview}
              </p>

              {/* Tags */}
              <div className="flex gap-2">
                <span className="px-4 py-1 rounded-full border border-white text-sm">
                  Action
                </span>
                <span className="px-4 py-1 rounded-full border border-white text-sm">
                  Adventure
                </span>
              </div>
              <div className="flex text-black pt-14 gap-2">
                <div className="flex flex-col">
                  <div>
                    <p>Release Date</p>
                    <p>March 31, 2025</p>
                  </div>
                  <div>
                    <p>Duration</p>
                    <p>1 hours 42 minutes</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <p>Directed By</p>
                    <p>Ryan Adriandhy</p>
                  </div>
                  <div>
                    <p>Cast</p>
                    <p>
                      Prince Poetiray, Quinn Salman, Graciella Abigail, M. Yusuf
                      Ozkan, M. Adhiyat, Angga Yunanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
