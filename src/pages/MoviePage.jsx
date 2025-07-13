import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Movieweek from "../components/Movieweek";
import Filtering from "../components/Filtering";
import Movielist from "../components/Movielist";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { getPage } from "../services/fetchMovie";
import Pagination from "../components/Pagination";
import { ScrollRestoration } from "react-router-dom";

export default function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(null);
  const [genre, setGenre] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!searchResults && !genre) {
      const fetchMovies = async () => {
        const movies = await getPage();
        setMovieList(movies);
      };
      fetchMovies();
    }
  }, [currentPage, searchResults, genre]);

  return (
    <div className="flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32">
      <ScrollRestoration />
      <Navbar />
      <Movieweek />

      <Filtering onSearchResults={setSearchResults} onGenre={setGenre} />

      <div className="flex flex-col items-center justify-center w-full mb-12">
        <Movielist
          classType="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center"
          movies={searchResults || genre || movieList}
        />
        {!searchResults && !genre && (
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={4}
          />
        )}
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
}
