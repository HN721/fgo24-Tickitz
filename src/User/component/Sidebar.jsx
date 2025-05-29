import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/reducers/auth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const getItem = useSelector((state) => state.auth.Auth);
  const navigate = useNavigate();
  const char = getItem.user.username;
  const fistName = char.charAt(0);
  const lastName = getItem.user.username.charAt(char.length - 1);
  const sidename = fistName + lastName;
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(Logout());
    navigate("/");
  }
  return (
    <div className="flex flex-col  w-full max-w-3xs  mt-12  bg-white  rounded-xl shadow-md  overflow-hidden">
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-800">INFO</span>
        <button className="text-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center pb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white text-4xl">
            {sidename}
          </div>
        </div>
        <h2 className="font-bold text-xl text-gray-800">
          {getItem.user.username}
        </h2>
        <span className="text-gray-500 text-sm">{getItem.user.email}</span>
      </div>

      {/* Loyalty Card */}
      <div className="px-6 py-4">
        <h3 className="text-sm text-gray-700 font-medium mb-3">
          Loyalty Points
        </h3>
        <div className="bg-secondary rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Moviegoers</span>
            <div className="bg-yellow-400 text-yellow-800 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white text-2xl font-bold">320</span>
            <span className="text-secondary text-sm">points</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>180 points become a master</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-secondary h-2 rounded-full w-3/5"></div>
        </div>
        <div className="mt-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg cursor-pointer">
          <LogOut className="w-5 h-5" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
