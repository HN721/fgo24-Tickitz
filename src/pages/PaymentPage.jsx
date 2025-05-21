import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../App";

export default function PaymentPage() {
  const [showModal, setShowModal] = useState(false);
  const { bookings } = useContext(DataContext);

  const [profile, setProfile] = useState({});
  console.log(profile);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    setProfile(token);
  }, []);
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600/50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg text-center relative">
            <h2 className="text-xl font-semibold mb-4">Payment Info</h2>

            <div className="mb-2 text-left">
              <p className="text-sm text-gray-600">No. Rekening Virtual</p>
              <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                <span className="font-semibold text-sm">1232132891382974</span>
                <button
                  className="text-xs text-secondary"
                  onClick={() =>
                    navigator.clipboard.writeText("1232132891382974")
                  }
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="my-3 text-left">
              <p className="text-sm text-gray-600">Total Payment</p>
              <p className="font-bold text-lg">{bookings.price}</p>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              Pay this payment bill before it is due,{" "}
              <span className="text-red-500 font-semibold">
                on June 23, 2023
              </span>
              . If the bill has not been paid by the specified time, it will be
              forfeited.
            </p>

            <div className="space-y-2">
              <button className="w-full bg-secondary text-white py-2 rounded font-medium">
                Check Payment
              </button>
              <button
                className="w-full border border-gray-300 text-gray-700 py-2 rounded font-medium"
                onClick={() => setShowModal(false)}
              >
                Pay Later
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md bg-gray-100 mx-auto mt-20 rounded-lg shadow-md p-6">
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold mb-4">Payment Info</h2>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">DATE & TIME</p>
            <p className="text-sm">{bookings.days}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">MOVIE TITLE</p>
            <p className="text-sm">{bookings.movieName}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">CINEMA NAME</p>
            <p className="text-sm">Cine One</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">NUMBER OF TICKETS</p>
            <p className="text-sm">{bookings?.seat.length} pieces</p>
          </div>

          <div className="mb-2 border-b-1  border-border">
            <p className="text-xs text-gray-500">TOTAL PAYMENT</p>
            <p className="text-sm text-secondary">Rp.{bookings.price}</p>
          </div>
        </div>

        <div className="mb-6 border-b-1  border-border">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={profile?.user?.username}
              readOnly
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={profile?.user?.email}
              readOnly
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              value={profile?.user?.phone}
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

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-secondary font-display text-white rounded py-3 font-medium"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}
