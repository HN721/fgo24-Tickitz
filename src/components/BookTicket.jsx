import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import http from "../lib/http";
import XXI from "../assets/cinepolis.png";
import Cinepolis from "../assets/xxi.png";
import Hiflix from "../assets/hiflixs.png";
import { DataContext } from "../App";

export default function BookTicket({ setData }) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinemaId, setSelectedCinemaId] = useState(null);
  const { setBookings } = useContext(DataContext);

  const logoMap = {
    XXI,
    Cinepolis,
    Hiflix,
  };

  const generateNext3Days = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const formatted = `${day}-${month}-${year}`;
      dates.push(formatted);
    }
    return dates;
  };

  const dates = generateNext3Days();

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const res = await http().get("/cinema");
        setCinemas(res.data.results);
      } catch (err) {
        console.error("Failed to fetch cinemas:", err);
      }
    };
    fetchCinemas();
  }, []);

  const onSubmit = (form) => {
    setData((prev) => ({ ...prev, ...form }));
    setBookings((prev) => ({ ...prev, ...form }));

    navigate("/Seat");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("cinemaId")} />

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">Book Tickets</h2>
          <button
            type="submit"
            className="bg-secondary text-white py-2 px-4 rounded"
          >
            BOOK NOW
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="font-medium mb-2 block">Choose Date</label>
            <select
              {...register("days")}
              className="border rounded-full w-full py-3 px-4"
            >
              {dates.map((d, idx) => (
                <option key={idx} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-medium mb-2 block">Choose Time</label>
            <select
              {...register("time")}
              className="border rounded-full w-full py-3 px-4"
            >
              <option value="10:00">10:00</option>
              <option value="13:00">13:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          {/* Lokasi */}
          <div>
            <label className="font-medium mb-2 block">Choose Location</label>
            <select
              {...register("location")}
              className="border rounded-full w-full py-3 px-4"
            >
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Depok">Depok</option>
            </select>
          </div>
        </div>

        {/* Pilihan cinema */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="font-medium">Choose Cinema</label>
            <span className="text-sm text-gray-500">
              {cinemas?.length} Results
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cinemas.map((cinema) => (
              <div
                key={cinema.id}
                onClick={() => {
                  setSelectedCinemaId(cinema.id);
                  setValue("cinemaId", cinema.id);
                }}
                className={`border rounded-lg p-4 flex items-center justify-center h-[153px] cursor-pointer transition ${
                  selectedCinemaId === cinema.id
                    ? "border-4 bg-secondary"
                    : "border-gray-200 hover:bg-secondary/40"
                }`}
              >
                <img
                  src={logoMap[cinema.name] || cinema.logo}
                  alt={cinema.name}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
