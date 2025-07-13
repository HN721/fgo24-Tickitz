import React, { useContext, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/reducers/bookings";
import http from "../lib/http";

export default function QrCode() {
  const { bookings } = useContext(DataContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.Auth.token);
  const img = bookings.background;

  const dataReq = {
    priceTotal: bookings.price,
    location: bookings.location,
    movieId: bookings.id,
    cinemaId: bookings.cinemaId,
    paymentMethodId: bookings.payment.id,
    days: bookings.days,
    time: bookings.time,
    details: bookings.seat.map((seat) => ({
      customerName: bookings.fullname,
      customerPhone: bookings.phone,
      seat: seat,
    })),
  };
  console.log(dataReq);
  useEffect(() => {
    const bookingData = {
      ...bookings,
      userId: user,
    };
    const addData = async () => {
      try {
        const res = await http(user).post("/trx/", dataReq);
        console.log("Transaction success:", res.data);
      } catch (err) {
        console.error("Transaction error:", err);
      }
    };
    addData();
    dispatch(addBooking(bookingData));
  }, [bookings]);

  const qrValue = bookings.length > 0 ? JSON.stringify(bookings[0]) : "";
  const bookingData = bookings;

  const handleDownload = () => {
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "ticket_qr_code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex  flex-col lg:flex-row min-h-screen">
      <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
        <img
          src={img}
          alt="Movie Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Tickitz</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Thank You For Purchasing
          </h2>
          <p className="text-sm sm:text-base text-gray-200 mb-4">
            Enjoy your movie and don’t forget your popcorn! 🎬🍿
          </p>
          <p className="text-sm text-blue-300">Please Download Your Ticket</p>
        </div>
      </div>

      <div className="w-full  lg:w-1/2 flex justify-center items-center bg-[#f1f2f6] p-6 sm:p-8">
        <div className="bg-white  mt-10 rounded-2xl shadow-lg p-6 w-full max-w-md">
          <div className="flex justify-center mb-4">
            <QRCodeCanvas id="qr-gen" value={qrValue} size={150} />
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="text-gray-500">Movie</span>
              <span className="font-semibold">{bookingData.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span>{bookingData.genres.map((g) => g).join(", ")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span>{bookingData.days}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time</span>
              <span>{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Count</span>
              <span>{bookingData.seat.length} pcs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Seats</span>
              <span>{bookingData.seat.join(", ")}</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span>${bookingData.price}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleDownload}
              className="border border-blue-600 text-blue-600 font-medium py-2 rounded hover:bg-blue-50"
            >
              ⬇️ Download
            </button>
            <button
              onClick={() => navigate("/profile-page")}
              className="bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
