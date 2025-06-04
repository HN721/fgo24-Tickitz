import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";

export default function SalesChart() {
  const [movieSelection, setMovieSelection] = useState("Movies Name");
  const [timeframeSelection, setTimeframeSelection] = useState("Weekly");
  const bookings = useSelector((state) => state.booking.bookings);
  console.log(bookings);
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Sales Chart</h2>
      <div className="flex flex-row gap-2 items-center">
        <div className="relative">
          <select
            className="appearance-none bg-gray-100 py-2 px-4 pr-8 rounded text-gray-700 w-40 focus:outline-none"
            value={movieSelection}
            onChange={(e) => setMovieSelection(e.target.value)}
          >
            <option>Movies Name</option>
            {bookings.map((items) => (
              <>
                <option>{items.movieName}</option>
              </>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 pointer-events-none text-gray-500" />
        </div>

        <div className="relative">
          <select
            className="appearance-none bg-gray-100 py-2 px-4 pr-8 rounded text-gray-700 w-32 focus:outline-none"
            value={timeframeSelection}
            onChange={(e) => setTimeframeSelection(e.target.value)}
          >
            {bookings.map((items) => (
              <>
                <option>{items.location}</option>
              </>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 pointer-events-none text-gray-500" />
        </div>

        <button className="bg-blue-600 text-white py-2 px-8 rounded hover:bg-blue-700 focus:outline-none">
          Filter
        </button>
      </div>
    </div>
  );
}
