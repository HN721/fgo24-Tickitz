import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Content() {
  const bookings = useSelector((state) => state.booking.bookings);
  const tokenData = useSelector((state) => state.auth.Auth);
  const userId = tokenData?.user?.id;

  const userBookings = bookings.filter((item) => item.userId === userId);

  return (
    <div className="mt-12 flex-1 px-4 w-full max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 bg-white p-5 rounded-xl shadow-md w-full">
        <Link to={"/Edit-Profile"}>
          <h1 className="text-gray-500">Account Settings</h1>
        </Link>
        <h1 className="text-blue-600 border-b-2 border-blue-600">
          Order History
        </h1>
      </div>

      <div className="mt-8 space-y-6">
        {userBookings.length > 0 ? (
          userBookings.map((order, i) => {
            const [showDetail, setShowDetail] = useState(false);

            return (
              <div key={i} className="bg-white p-5 rounded-xl shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <p className="text-gray-400 text-sm">
                      {order.days} - {order.time} {order.location}
                    </p>
                    <h2 className="font-semibold text-lg">{order.movieName}</h2>
                    <p className="text-sm text-gray-500">
                      Seat: {order.seat.join(", ")} | Price: Rp{" "}
                      {order.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-black text-lg font-bold italic sm:text-right">
                    {order.cinema}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center gap-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Ticket in active
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      Paid
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDetail(!showDetail)}
                    className="text-gray-500 text-sm"
                  >
                    {showDetail ? "Hide Details ▲" : "Show Details ▼"}
                  </button>
                </div>

                {showDetail && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=TicketID"
                        alt="QR Code"
                        className="w-20 h-20"
                      />
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                        <Detail label="Category" value="PG-13" />
                        <Detail label="Time" value={order.time} />
                        <Detail label="Seats" value={order.seat.join(", ")} />
                        <Detail label="Movie" value={order.movieName} />
                        <Detail label="Date" value={order.days} />
                        <Detail
                          label="Count"
                          value={`${order.seat.length} pcs`}
                        />
                        <Detail
                          label="Total"
                          value={`Rp ${order.price.toLocaleString()}`}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">You have no order history.</p>
        )}
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="font-semibold break-words">{value}</p>
    </div>
  );
}
