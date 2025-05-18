import React, { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";

const sortOptions = [
  { label: "POPULAR", value: "popular" },
  { label: "LATEST", value: "latest" },
  { label: "Name (A–Z)", value: "az" },
  { label: "Name (Z–A)", value: "za" },
];

const TMDB_API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const TMDB_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmVhOGUwYjY1MGIyMDJkMTRlYmI1MjI5ZGQwZmRmOSIsIm5iZiI6MTc0NzM3Njk3NC42OTUwMDAyLCJzdWIiOiI2ODI2ZGI0ZTkxMTY1ZjYzYmE2ZWZjODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UVz4N682u9la2B2SkINIeIYfKNJm8lvWBUzLCrs-3Wo",
  },
};

export default function Filtering({
  sortOption,
  onSortChange,
  onSearchResults,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await fetch(
        `${TMDB_API_URL}&query=${encodeURIComponent(query)}`,
        TMDB_OPTIONS
      );
      const data = await response.json();
      if (onSearchResults) {
        onSearchResults(data.results || []);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
        <h2 className="text-2xl font-bold">Now Showing in Cinemas</h2>

        {/* Dropdown Sort */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 font-semibold"
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
                  className={`w-full text-left px-4 py-2 hover:bg-orange-100 flex justify-between items-center ${
                    sortOption === option.value
                      ? "text-orange-600 font-semibold"
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

      {/* Search & Genres */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search Your Movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 outline-none"
          />
        </div>

        {/* Genre Buttons */}
        <div className="flex flex-wrap gap-3">
          {["ACTION", "ADVENTURE", "COMEDY", "SCI-FI"].map((genre) => (
            <button
              key={genre}
              className="px-4 py-2 border border-gray-400 rounded-full text-sm font-semibold hover:bg-gray-100"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
