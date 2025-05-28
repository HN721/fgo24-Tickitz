import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { useSelector } from "react-redux";

export default function MovieSeatBooking() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { bookings, setBookings } = useContext(DataContext);
  const seatBook = useSelector((state) => state.booking.bookings);

  const findMovie = seatBook.filter(
    (item) => item.IdMovie === bookings.IdMovie
  );
  const soldoutBook = findMovie.flatMap((item) => item.seat);
  const soldSeats = soldoutBook;

  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const loveSeats = ["F6"];

  const toggleSeat = (seatId) => {
    if (soldSeats.includes(seatId) || loveSeats.includes(seatId)) return;

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const getSeatStatus = (seatId) => {
    if (selectedSeats.includes(seatId)) return "selected";
    if (soldSeats.includes(seatId)) return "sold";
    if (loveSeats.includes(seatId)) return "love";
    return "available";
  };

  const getSeatClass = (status) => {
    switch (status) {
      case "selected":
        return "bg-secondary";
      case "sold":
        return "bg-gray-500 cursor-not-allowed";
      case "love":
        return "bg-pink-500 cursor-not-allowed";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  const totalPayment = selectedSeats.length * bookings.price;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      Swal.fire("Silakan pilih kursi terlebih dahulu sebelum melanjutkan.");

      return;
    }
    setBookings((prev) => ({
      ...prev,
      seat: selectedSeats,
      price: totalPayment,
    }));
    navigate("/payment");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center p-4 mt-12 bg-gray-100 min-h-screen">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
            <div className="flex items-center mb-6">
              <img
                src={bookings.img}
                alt={bookings.movieName}
                className="w-24 h-16 rounded-md mr-4"
              />
              <div>
                <h2 className="font-bold text-lg">{bookings.movieName}</h2>
                <div className="flex gap-2 text-xs text-gray-500">
                  {bookings.genre.map((genre, id) => (
                    <span key={id}>{genre.name}</span>
                  ))}
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-700 mr-2">
                    Regular - {bookings.time}
                  </span>
                  <button className="bg-secondary text-white text-xs px-4 py-1 rounded">
                    Change
                  </button>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-6">Choose Your Seat</h3>

            <div className="text-center flex justify-center items-center w-full mb-6 text-xs bg-gray-500 text-white py-2 rounded">
              Screen
            </div>

            <div className="overflow-x-auto">
              <div className="flex flex-col gap-2 min-w-[600px]">
                {rows.map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <div className="w-6 text-center font-medium text-sm">
                      {row}
                    </div>
                    {[...Array(14)].map((_, i) => {
                      const col = i + 1;
                      const seatId = `${row}${col}`;
                      const status = getSeatStatus(seatId);
                      return (
                        <div
                          key={seatId}
                          className={`w-8 h-8 rounded cursor-pointer ${getSeatClass(
                            status
                          )}`}
                          onClick={() => toggleSeat(seatId)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium mb-2">Seating key</h4>
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-200 rounded mr-2"></div>
                  Available
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-secondary rounded mr-2"></div>
                  Selected
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-pink-500 rounded mr-2"></div>
                  Love seat
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-500 rounded mr-2"></div>
                  Sold
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full md:w-64">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="flex justify-center mb-2">
                <h3 className="text-secondary font-bold">{bookings.cinema}</h3>
              </div>
              <div className="text-center mb-6">
                <p className="text-sm">Bioskop {bookings.cinema}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Movie selected</span>
                  <span className="font-medium">{bookings.movieName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{bookings.days}</span>
                  <span className="font-medium">{bookings.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">One ticket price</span>
                  <span className="font-medium">
                    Rp.{bookings.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Seat chosen</span>
                  <span className="font-medium">
                    {selectedSeats.join(", ") || "-"}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Payment</span>
                  <span className="font-bold text-secondary text-lg">
                    Rp.{totalPayment.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-medium"
              disabled={selectedSeats.length === 0}
            >
              Checkout now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
