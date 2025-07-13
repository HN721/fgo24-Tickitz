import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../App";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dana from "../assets/dana.png";
import visa from "../assets/visa.png";
import gopay from "../assets/gopay.png";
import bca from "../assets/bca.png";
import Stepper from "../components/Stepper";
import http from "../lib/http";
export default function PaymentPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { bookings, setBookings } = useContext(DataContext);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const res = await http().get("/payment");
        const result = await res.data.results;
        setPaymentMethods(result);

        console.log(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPayment();
  }, []);
  const handleConfirmPayment = () => {
    setBookings({
      ...bookings,
      fullname,
      email,
      phone,
      payment: selectedPayment,
    });
    setShowModal(true);
  };

  const paymentLogos = {
    GoPay: gopay,
    DANA: dana,
    BRI: bca,
  };
  return (
    <div className="min-h-screen bg-gray-200">
      <ScrollRestoration />
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
              <p className="font-bold text-lg">
                {bookings.price.toLocaleString()}
              </p>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              Pay this payment bill before it is due,{" "}
              <span className="text-red-500 font-semibold">
                on June 23, 2025
              </span>
              . If the bill has not been paid by the specified time, it will be
              forfeited.
            </p>

            <div className="space-y-2">
              <button
                onClick={() => navigate("/payment/qr-code")}
                className="w-full bg-secondary text-white py-2 rounded font-medium"
              >
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
      <div className="pt-20">
        <Stepper currentStep={3} />
      </div>

      <div className="max-w-2xl mt-10 bg-white mx-auto  rounded-lg shadow-md p-6">
        <div className="mb-6   ">
          <h2 className="text-lg text-center font-semibold mb-4">
            Payment Info
          </h2>

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
            <p className="text-sm">{bookings.cinema}</p>
          </div>

          <div className="mb-4 border-b-1  border-border">
            <p className="text-xs text-gray-500">NUMBER OF TICKETS</p>
            <p className="text-sm">{bookings?.seat.length} pieces</p>
          </div>

          <div className="mb-2 border-b-1  border-border">
            <p className="text-xs text-gray-500">TOTAL PAYMENT</p>
            <p className="text-sm text-secondary">
              Rp.{bookings.price.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mb-6 border-b-1  border-border">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>

          <div className="mb-4 border-b-1  border-border">
            <label className=" text-sm mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className=" text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 border-b-1  border-border">
            <label className=" text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedPayment(method)}
                className={`border rounded p-2 flex items-center justify-center w-24 h-14 
        ${
          selectedPayment?.id === method.id
            ? "border-secondary ring-2 ring-secondary"
            : "border-gray-300"
        }`}
              >
                <img
                  src={paymentLogos[method.name] || visa}
                  alt={method.name}
                  className="h-8 object-contain"
                />
              </button>
            ))}
          </div>

          <button
            onClick={handleConfirmPayment}
            className="w-full bg-secondary font-display text-white rounded py-3 font-medium"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
}
