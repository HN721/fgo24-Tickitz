import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  filterByGenre,
  searchingMovie,
  getAllGenres,
} from "../services/searching";

export default function Filtering({ onSearchResults, onGenre }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [count, setCount] = useState(0);
  const [genreList, setGenreList] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await getAllGenres();
        setGenreList(res.results);
      } catch (err) {
        console.error("Failed to fetch genres:", err);
      }
    };
    fetchGenres();
  }, []);

  // Fungsi pencarian
  const handleSearch = async ({ query }) => {
    try {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("query", query);
        newParams.delete("genre");
        return newParams;
      });

      const res = await searchingMovie(query);
      onGenre(null);
      onSearchResults(res.results);
      setCount(res.results.length);
    } catch (err) {
      console.error("Search Error:", err);
    }
  };

  // Fungsi filter genre
  const handleGenre = async (genreName) => {
    try {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("genre", genreName.toLowerCase());
        newParams.delete("query");
        return newParams;
      });

      const res = await filterByGenre(genreName.toLowerCase());
      onSearchResults(res.results);
      onGenre(res.results);
      setCount(res.results.length);
    } catch (err) {
      console.error("Genre Filter Error:", err);
    }
  };

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Now Showing in Cinemas</h2>

      {/* Search Form */}
      <form
        className="w-full relative md:w-1/3 mb-6"
        onSubmit={handleSubmit(handleSearch)}
      >
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
        <input
          type="text"
          placeholder="Search Your Movie"
          defaultValue={searchParams.get("query")}
          {...register("query")}
          className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 outline-none"
        />
        <button className="hidden" type="submit" />
      </form>

      {/* Genre Filter */}
      <div className="flex flex-wrap gap-3">
        {genreList.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenre(genre.name)}
            className="px-4 py-2 border border-gray-400 rounded-full text-sm font-semibold hover:bg-gray-100"
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/* Search Result Info */}
      {searchParams.get("query") && (
        <div className="mt-5 font-display font-md text-2xl">
          Hasil pencarian untuk "{searchParams.get("query")}" ({count})
        </div>
      )}
    </div>
  );
}
