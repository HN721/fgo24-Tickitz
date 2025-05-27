import React, { useContext, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/reducers/bookings";

export default function QrCode() {
  const { bookings } = useContext(DataContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.Auth);

  useEffect(() => {
    console.log(bookings);
    const bookingData = {
      ...bookings,
      userId: user?.user?.id || null,
      timestamp: new Date().toISOString(),
    };

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
    <div className="qr-code bg-[#f1f2f6]">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm w-full text-center relative">
        <div className="p-6 flex justify-center border-b">
          <QRCodeCanvas id="qr-gen" value={qrValue} size={150} />
        </div>
        <div className="p-6 space-y-2  text-left text-sm">
          <div className="grid-qr">
            <div className="flex-qr">
              <span className="text-gray-500">Movie</span>
              <span className="font-semibold truncate max-w-[150px]">
                {bookingData.movieName}
              </span>
            </div>
            <div className="flex-qr">
              <span className="text-gray-500">Category</span>
              <span>{bookingData.genre.map((g) => g.name).join(", ")}</span>
            </div>
            <div className="flex-qr">
              <span className="text-gray-500">Date</span>
              <span>{bookingData.days}</span>
            </div>
            <div className="flex-qr">
              <span className="text-gray-500">Time</span>
              <span>{bookingData.time}</span>
            </div>
            <div className="flex-qr">
              <span className="text-gray-500">Count</span>
              <span>{bookingData.seat.length} pcs</span>
            </div>
            <div className="flex-qr">
              <span className="text-gray-500">Seats</span>
              <span>{bookingData.seat.join(", ")}</span>
            </div>
          </div>

          <div className="flex justify-between w-full border-t pt-2 font-semibold">
            <span>Total</span>
            <span>{bookingData.price}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
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
  );
}
