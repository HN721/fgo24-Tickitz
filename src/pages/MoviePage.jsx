import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Movieweek from "../components/Movieweek";
import Filtering from "../components/Filtering";
import Movielist from "../components/Movielist";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import { getPage, getData } from "../services/fetchMovie";
import Pagination from "../components/Pagination";
import { ScrollRestoration } from "react-router-dom";

export default function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("popular");
  const [searchResults, setSearchResults] = useState(null);
  const [genre, setGenre] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!searchResults) {
      const fetchMovies = async () => {
        const movies = await getPage(currentPage, sortOption);
        setMovieList(movies);
      };
      fetchMovies();
    }
  }, [currentPage, searchResults, sortOption]);
  console.log(genre);
  return (
    <div className="flex-col mx-12">
      <ScrollRestoration />
      <Navbar />
      <Movieweek />
      <Filtering
        sortOption={sortOption}
        onSortChange={setSortOption}
        onSearchResults={setSearchResults}
        onGenre={setGenre}
      />
      <div className="flex flex-col justify-center w-full mb-12">
        <Movielist
          classType="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-3"
          sortOption={sortOption}
          movies={searchResults || genre || movieList}
        />
        {!searchResults && (
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
