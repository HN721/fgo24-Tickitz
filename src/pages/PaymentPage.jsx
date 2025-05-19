import React from "react";
import Navbar from "../components/Navbar";

export default function PaymentPage() {
  const paymentInfo = {
    date: "Tuesday, 07 July 2020 at 02:00pm",
    movieTitle: "Spider-Man: Homecoming",
    cinemaName: "CineDine21 Cinema",
    tickets: 3,
    totalPayment: "$30.00",
    personalInfo: {
      fullName: "Jonas El Rodriguez",
      email: "jonasrodr123@gmail.com",
      phoneNumber: "+62    81445587121",
    },
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="max-w-md bg-gray-100 mx-auto mt-20 rounded-lg shadow-md p-6">
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold mb-4">Payment Info</h2>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">DATE & TIME</p>
            <p className="text-sm">{paymentInfo.date}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">MOVIE TITLE</p>
            <p className="text-sm">{paymentInfo.movieTitle}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">CINEMA NAME</p>
            <p className="text-sm">{paymentInfo.cinemaName}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">NUMBER OF TICKETS</p>
            <p className="text-sm">{paymentInfo.tickets} pieces</p>
          </div>

          <div className="mb-2 border-b-1  border-border">
            <p className="text-xs text-gray-500">TOTAL PAYMENT</p>
            <p className="text-sm text-secondary">{paymentInfo.totalPayment}</p>
          </div>
        </div>

        <div className="mb-6 border-b-1  border-border">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={paymentInfo.personalInfo.fullName}
              readOnly
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={paymentInfo.personalInfo.email}
              readOnly
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              value={paymentInfo.personalInfo.phoneNumber}
              readOnly
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

          <div className="flex space-x-2 mb-4">
            <div className="border border-gray-300 rounded p-2 flex items-center justify-center w-20 h-12">
              <div className="text-sm font-medium flex items-center">
                <span className="text-secondary font-bold">G</span>
                <span className="text-red-500 font-bold">Pay</span>
              </div>
            </div>

            <div className="border border-gray-300 rounded p-2 flex items-center justify-center w-20 h-12">
              <div className="text-blue-800 font-bold text-xl">VISA</div>
            </div>

            <div className="border border-gray-300 rounded p-2 flex items-center justify-center w-20 h-12">
              <div className="font-medium text-sm">
                <span className="text-green-500">go</span>
                <span className="text-blue-500">pay</span>
              </div>
            </div>

            <div className="border border-gray-300 rounded p-2 flex items-center justify-center w-20 h-12">
              <div className="text-blue-600 font-bold text-xl">P</div>
            </div>
          </div>

          <button className="w-full bg-secondary font-display text-white rounded py-3 font-medium">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}
