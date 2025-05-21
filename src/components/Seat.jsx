import React, { useContext, useState } from "react";
import spiderman from "../assets/spiderman.png";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { AuthContext } from "../Context/AuthContext";
export default function MovieSeatBooking() {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { token } = useContext(AuthContext);
  const { bookings, setBookings } = useContext(DataContext);

  const rows = ["A", "B", "C", "D", "E", "F", "G"];

  const soldSeats = [
    "A5",
    "A9",
    "B1",
    "B2",
    "B10",
    "C8",
    "D1",
    "D10",
    "E3",
    "E11",
    "F7",
    "F12",
    "G2",
    "G8",
  ];

  const loveSeats = ["F6"];

  const toggleSeat = (seatId) => {
    if (soldSeats.includes(seatId) || loveSeats.includes(seatId)) {
      return;
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
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
        return "bg-gray-500";
      case "love":
        return "bg-pink-500";
      default:
        return "bg-gray-200 hover:bg-gray-300";
    }
  };

  const totalPayment = selectedSeats.length * bookings.price;
  function handleSubmit(e) {
    e.preventDefault();
    setBookings((prev) => ({
      ...prev,
      seat: selectedSeats,
      price: totalPayment,
    }));
    navigate("/payment");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center p-4 mt-12 bg-gray-100 min-h-screen">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
            <div className="flex items-center mb-6">
              <img
                src={bookings.img}
                alt="Spider-Man: Homecoming"
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

            <div className="text-center flex justify-center items-center w-max-content mb-6 text-xs  bg-gray-500 text-white">
              Screen
            </div>

            <div className="mb-8">
              <div className="flex">
                <div className="w-6 mr-2">
                  {rows.map((row, rowIndex) => (
                    <button
                      key={rowIndex}
                      className="h-6 flex items-center justify-center text-xs font-medium text-gray-700"
                    >
                      {row}
                    </button>
                  ))}
                </div>

                <div className="flex-1 mr-4">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                      {[1, 2, 3, 4, 5, 6, 7].map((col) => {
                        const seatId = `${row}${col}`;
                        const status = getSeatStatus(seatId);
                        return (
                          <div
                            key={`${row}${col}`}
                            className={`w-6 h-6 m-0.5 rounded cursor-pointer ${getSeatClass(
                              status
                            )}`}
                            onClick={() => toggleSeat(seatId)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Right section seats */}
                <div className="flex-1">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                      {[8, 9, 10, 11, 12, 13, 14].map((col) => {
                        const seatId = `${row}${col}`;
                        const status = getSeatStatus(seatId);
                        return (
                          <div
                            key={`${row}${col}`}
                            className={`w-6 h-6 m-0.5 rounded cursor-pointer ${getSeatClass(
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
            </div>

            <div className="flex">
              <div className="w-6 mr-2"></div>
              <div className="flex-1 flex mr-4">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <div
                    key={num}
                    className="w-6 text-center text-xs text-gray-700"
                  >
                    {num}
                  </div>
                ))}
              </div>
              <div className="flex-1 flex">
                {[8, 9, 10, 11, 12, 13, 14].map((num) => (
                  <div
                    key={num}
                    className="w-6 text-center text-xs text-gray-700"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-medium mb-2">Seating key</h4>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-200 rounded mr-2"></div>
                  <span className="text-xs">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-secondary rounded mr-2"></div>
                  <span className="text-xs">Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-pink-500 rounded mr-2"></div>
                  <span className="text-xs">Love seat</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-500 rounded mr-2"></div>
                  <span className="text-xs">Sold</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-64">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="flex justify-center mb-2">
                <h3 className="text-secondary font-bold">CineOne21</h3>
              </div>
              <div className="text-center mb-6">
                <p className="text-sm">{bookings.cinema}</p>
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
                  <span className="font-medium">Rp.{bookings.price}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Seat chosen</span>
                  <span className="font-medium">
                    {selectedSeats.join(", ")}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Payment</span>
                  <span className="font-bold text-secondary text-lg">
                    Rp.{totalPayment}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-medium"
            >
              Checkout now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
