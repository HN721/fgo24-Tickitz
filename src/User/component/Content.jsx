import React from "react";

export default function Content() {
  return (
    <div className="mt-12  flex-1 px-4">
      <div className="flex gap-6 bg-white p-5 rounded-xl shadow-md w-full ">
        <h1 className="text-gray-500">Account Settings</h1>
        <h1 className="text-blue-600 border-b-2 border-blue-600">
          Order History
        </h1>
      </div>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">
                Tuesday, 07 July 2020 - 04:30pm
              </p>
              <h2 className="font-semibold text-lg">Spider-Man: Homecoming</h2>
            </div>
            <div className="text-blue-600 font-bold">CineOne21</div>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <div className="flex gap-2">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                Ticket in active
              </span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                Not Paid
              </span>
            </div>
            <button className="text-gray-500 text-sm">Show Details ▼</button>
          </div>
        </div>

        {[1, 2].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow-md">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400 text-sm">
                  Monday, 14 June 2020 - 02:00pm
                </p>
                <h2 className="font-semibold text-lg">Avengers: End Game</h2>
              </div>
              <div className="text-black text-xl font-bold italic">ebu.id</div>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <div className="flex gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  Ticket used
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Paid
                </span>
              </div>
              <button className="text-gray-500 text-sm">Show Details ▼</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
