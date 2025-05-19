import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookTicket() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Book Tickets</h2>
        <button
          onClick={() => {
            navigate("/Seat");
          }}
          className="bg-secondary hover:bg-orange-500 text-white font-medium py-2 px-4 rounded-full"
        >
          BOOK NOW
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Date Selector */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Choose Date
          </label>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer">
              <option>Friday, 9 May, 2025</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Time Selector */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Choose Time
          </label>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer">
              <option>08:30 AM</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Choose Location
          </label>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer">
              <option>Yogyakarta</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Cinema */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <label className="block text-gray-800 font-medium">
            Choose Cinema
          </label>
          <span className="text-sm text-gray-500">39 Results</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Cinema Option 1 */}
          <div className="relative border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20 bg-white cursor-pointer">
            <div className="text-gray-600 font-semibold italic">ebv.id</div>
            <button className="absolute top-2 right-2 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-transparent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Cinema Option 2 - Selected */}
          <div className="relative border-2 border-orange-500 rounded-lg p-4 flex items-center justify-center h-20 bg-orange-500 text-white cursor-pointer">
            <div className="font-bold text-2xl">hiflix</div>
            <button className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <svg
                className="w-3 h-3 text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Cinema Option 3 */}
          <div className="relative border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20 bg-white cursor-pointer">
            <div className="text-gray-600 font-medium">CineOne21</div>
            <button className="absolute top-2 right-2 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-transparent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Cinema Option 4 */}
          <div className="relative border border-gray-200 rounded-lg p-4 flex items-center justify-center h-20 bg-white cursor-pointer">
            <div className="text-gray-600 font-semibold italic">ebv.id</div>
            <button className="absolute top-2 right-2 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-transparent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
          1
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center">
          2
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center">
          3
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center">
          4
        </button>
        <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
