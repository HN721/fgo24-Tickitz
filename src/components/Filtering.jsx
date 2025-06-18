import React, { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { searchingMovie } from "../services/searching";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { filterByGenre } from "../services/filtering";

const sortOptions = [
  { label: "POPULAR", value: "popular" },
  { label: "LATEST", value: "latest" },
  { label: "Name (A–Z)", value: "az" },
  { label: "Name (Z–A)", value: "za" },
];
const genreList = [
  {
    id: 28,
    name: "ACTION",
  },
  {
    id: 1,
    name: "ADVENTURE",
  },
  {
    id: 35,
    name: "COMEDY",
  },
  {
    id: 878,
    name: "SCI-FI",
  },
];
export default function Filtering({
  sortOption,
  onSortChange,
  onSearchResults,
  onGenre,
}) {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();

  const handleSearch = async (value) => {
    if (!value.query.trim()) return;
    try {
      const data = await searchingMovie(value);
      console.log(value.query);
      if (onSearchResults) {
        onSearchResults(data.results);
      }
      setSearchParams(value);
      setCount(data.results.length);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  const handleGenre = async (value) => {
    try {
      const data = await filterByGenre(value);
      onSearchResults(null);
      onGenre(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
        <h2 className="text-2xl font-bold">Now Showing in Cinemas</h2>

        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-secondary text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold"
          >
            {sortOptions.find((o) => o.value === sortOption)?.label || "Sort"}
            <ChevronDown size={16} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onSortChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-hover flex justify-between items-center ${
                    sortOption === option.value
                      ? "text-secondary font-semibold"
                      : ""
                  }`}
                >
                  {option.label}
                  {sortOption === option.value && <Check size={16} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
        <form
          className=" w-full relative md:w-1/3"
          onSubmit={handleSubmit(handleSearch)}
        >
          <div>
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
            />{" "}
            <button className="hidden" type="submit" />
          </div>
        </form>

        <div className="flex flex-wrap gap-3">
          {genreList.map((genre) => (
            <button
              key={genre.id}
              onClick={() => {
                handleGenre(genre.id);
              }}
              className="px-4 py-2 border border-gray-400 rounded-full text-sm font-semibold hover:bg-gray-100"
            >
              {genre.name}
            </button>
          ))}
        </div>
      </div>
      <div className=" mt-5 font-display font-md text-2xl">
        {searchParams.get("query") &&
          `Hasil Pencarian dari
            ${searchParams.get("query")} "(${count})"`}
      </div>
    </div>
  );
}
