import React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function Filtering() {
  return (
    <div className="px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold">Now Showing in Cinemas</h2>

        {/* Dropdown */}
        <button className="bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          POPULAR
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Filters and Search */}
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
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 outline-none"
          />
        </div>

        {/* Genre Filters */}
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
