import React from "react";

export default function Content() {
  const bookings = JSON.parse(localStorage.getItem("Bookings") || "[]");
  const tokenData = JSON.parse(localStorage.getItem("token") || "[]");
  const userId = tokenData?.user?.id;

  const userBookings = bookings.filter((item) => item.userId === userId);

  return (
    <div className="mt-12  flex-1 px-4">
      <div className="flex gap-6 bg-white p-5 rounded-xl shadow-md w-full ">
        <h1 className="text-gray-500">Account Settings</h1>
        <h1 className="text-blue-600 border-b-2 border-blue-600">
          Order History
        </h1>
      </div>

      <div className="mt-8 space-y-6">
        {userBookings.length > 0 ? (
          userBookings.map((order, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-sm">
                    {order.days} - {order.time}
                  </p>
                  <h2 className="font-semibold text-lg">{order.movieName}</h2>
                  <p className="text-sm text-gray-500">
                    Seat: {order.seat.join(", ")} | Price: Rp {order.price}
                  </p>
                </div>
                <div className="text-black text-xl font-bold italic">
                  {order.location}
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Ticket in active
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    Paid
                  </span>
                </div>
                <button className="text-gray-500 text-sm">
                  Show Details ▼
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">You have no order history.</p>
        )}
      </div>
    </div>
  );
}
