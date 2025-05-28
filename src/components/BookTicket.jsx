import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Ebu from "../assets/ebu.svg";
import CineOne from "../assets/cineOne.svg";
import Hiflix from "../assets/hiflix.svg";
export default function BookTicket({ setData }) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [selectedCinema, setSelectedCinema] = useState("");

  function handleData(value) {
    setData((prev) => ({ ...prev, ...value }));
  }
  function handleCinemaClick(cinemaName) {
    setSelectedCinema(cinemaName);
    setValue("cinema", cinemaName);
  }
  return (
    <form onSubmit={handleSubmit(handleData)}>
      <input type="hidden" {...register("cinema")} />

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
              <select
                {...register("days")}
                className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer"
              >
                <option value={"12-06-2025"}>Friday, 12 June, 2025</option>
                <option value={"9-05-2025"}>Sunday, 9 May, 2025</option>
                <option value={"27-05-2025"}>Saturday, 27 May, 2025</option>
                <option value={"10-05-2025"}>Monday, 10 May, 2025</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
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

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Choose Time
            </label>
            <div className="relative">
              <select
                {...register("time")}
                className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer"
              >
                <option>08:30 AM</option>
                <option>10:30 AM</option>
                <option>12:04 AM</option>
                <option>17:30 AM</option>
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

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Choose Location
            </label>
            <div className="relative">
              <select
                {...register("location")}
                className="appearance-none border border-gray-300 rounded-full w-full py-3 px-4 pl-10 pr-8 bg-white cursor-pointer"
              >
                <option value={"Yogyakarta"}>Yogyakarta</option>
                <option value={"Jakarta"}>Jakarta</option>
                <option value={"Tangerang"}>Tangerang</option>
                <option value={"Depok"}>Depok</option>
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

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <label className="block text-gray-800 font-medium">
              Choose Cinema
            </label>
            <span className="text-sm text-gray-500">4 Results</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              onClick={() => handleCinemaClick("Hiflix")}
              className={`relative border rounded-lg p-4 flex items-center justify-center h-[153px] bg-primary cursor-pointer ${
                selectedCinema === "Hiflix"
                  ? "border-4 bg-secondary"
                  : "border-gray-200 hover:bg-secondary"
              }`}
            >
              <img src={Hiflix} alt="Hiflix" />
            </div>

            <div
              onClick={() => handleCinemaClick("CineOne")}
              className={`relative border rounded-lg p-4 flex items-center justify-center h-[153px] bg-primary cursor-pointer ${
                selectedCinema === "CineOne"
                  ? "border-4 bg-secondary"
                  : "border-gray-200 hover:bg-secondary"
              }`}
            >
              <img src={CineOne} alt="CineOne" />
            </div>

            <div
              onClick={() => handleCinemaClick("Ebu")}
              className={`relative border rounded-lg p-4 flex items-center justify-center h-[153px] bg-primary cursor-pointer ${
                selectedCinema === "Ebu"
                  ? "border-4 bg-secondary"
                  : "border-gray-200 hover:bg-secondary"
              }`}
            >
              <img src={Ebu} alt="Ebu" />
            </div>
            <div
              onClick={() => handleCinemaClick("CineOne")}
              className={`relative border rounded-lg p-4 flex items-center justify-center h-[153px] bg-primary cursor-pointer ${
                selectedCinema === "CineOne"
                  ? "border-4 bg-secondary"
                  : "border-gray-200 hover:bg-secondary"
              }`}
            >
              <img src={CineOne} alt="CineOne" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
