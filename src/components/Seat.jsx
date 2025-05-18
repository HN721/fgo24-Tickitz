import React, { useState } from "react";
import spiderman from "../assets/spiderman.png";
export default function MovieSeatBooking() {
  const [selectedSeats, setSelectedSeats] = useState(["C4", "C5", "C6"]);

  // Movie details
  const movieDetails = {
    title: "Spider-Man: Homecoming",
    genres: ["Action", "Adventure"],
    time: "13:00 PM",
    date: "Tuesday, 07 July 2020",
    cinema: "CineOne21 Cinema",
    price: 10,
  };

  // Generate seat grid
  const rows = ["A", "B", "C", "D", "E", "F", "G"];

  // Define sold seats
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

  // Define love seat
  const loveSeats = ["F6"];

  // Handle seat selection
  const toggleSeat = (seatId) => {
    if (soldSeats.includes(seatId) || loveSeats.includes(seatId)) {
      return; // Can't select sold or love seats
    }

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  // Check seat status
  const getSeatStatus = (seatId) => {
    if (selectedSeats.includes(seatId)) return "selected";
    if (soldSeats.includes(seatId)) return "sold";
    if (loveSeats.includes(seatId)) return "love";
    return "available";
  };

  // Get CSS class based on seat status
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

  // Calculate total payment
  const totalPayment = selectedSeats.length * movieDetails.price;

  return (
    <div className="flex justify-center p-4 mt-12 bg-gray-100 min-h-screen">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
        {/* Left column - Seat selection */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
          <div className="flex items-center mb-6">
            <img
              src={spiderman}
              alt="Spider-Man: Homecoming"
              className="w-24 h-16 rounded-md mr-4"
            />
            <div>
              <h2 className="font-bold text-lg">{movieDetails.title}</h2>
              <div className="flex gap-2 text-xs text-gray-500">
                {movieDetails.genres.map((genre, index) => (
                  <span key={index}>{genre}</span>
                ))}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-700 mr-2">
                  Regular - {movieDetails.time}
                </span>
                <button className="bg-secondary text-white text-xs px-4 py-1 rounded">
                  Change
                </button>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-6">Choose Your Seat</h3>

          {/* Screen indication */}
          <div className="text-center mb-6 text-xs text-gray-500">Screen</div>

          {/* Seat grid */}
          <div className="mb-8">
            <div className="flex">
              {/* Row labels */}
              <div className="w-6 mr-2">
                {rows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="h-6 flex items-center justify-center text-xs font-medium text-gray-700"
                  >
                    {row}
                  </div>
                ))}
              </div>

              {/* Left section seats */}
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

          {/* Column numbers */}
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

          {/* Seating key */}
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

        {/* Right column - Order summary */}
        <div className="w-full md:w-64">
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="flex justify-center mb-2">
              <h3 className="text-secondary font-bold">CineOne21</h3>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm">{movieDetails.cinema}</p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Movie selected</span>
                <span className="font-medium">{movieDetails.title}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">{movieDetails.date}</span>
                <span className="font-medium">{movieDetails.time}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">One ticket price</span>
                <span className="font-medium">${movieDetails.price}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Seat chosen</span>
                <span className="font-medium">{selectedSeats.join(", ")}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Payment</span>
                <span className="font-bold text-secondary text-lg">
                  ${totalPayment}
                </span>
              </div>
            </div>
          </div>

          <button className="w-full bg-secondary text-white py-3 rounded-lg font-medium">
            Checkout now
          </button>
        </div>
      </div>
    </div>
  );
}
