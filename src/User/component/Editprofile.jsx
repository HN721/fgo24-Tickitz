import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Editprofile() {
  const user = useSelector((state) => state.auth.Auth.user);
  return (
    <div className="mt-12  flex-1 px-4">
      <div className="flex gap-6 bg-white p-5 rounded-xl shadow-md w-full ">
        <h1 className=" text-blue-600 border-b-2 border-blue-600">
          Account Settings
        </h1>
        <Link to={"/Profile-Page"}>
          <h1 className="text-gray-500">Order History</h1>
        </Link>
      </div>

      <div className="mt-8 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Details Information</h2>
          <div className="border-b-1 border-profile w-full mb-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                value={user.username}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={user.username}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                value={user.email}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+62"
                  className="w-20 border border-gray-300 rounded-lg p-2 text-center"
                  readOnly
                />
                <input
                  type="tel"
                  value={user.phone}
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Account and Privacy */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Account and Privacy</h2>
          <div className="border-b-1 border-profile w-full mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  autoComplete="none"
                  placeholder="Write your password"
                  className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-start">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
            Update changes
          </button>
        </div>
      </div>
    </div>
  );
}
