import React from "react";
import Logo from "../../assets/logo.png";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarAdmin() {
  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="Tickitz Logo" className="h-8 mr-4" />
      </div>

      <div className="flex gap-6 text-lg font-med font-display text-gray-700">
        <Link to={"/profile-page"}>
          <p className="text-secondary">Home</p>
        </Link>
        <Link to={"/Movie-list"}>
          <p>Movie</p>
        </Link>
        <Link to={"/Movie-list"}>
          <p>Buy Ticket</p>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <select className="border rounded px-2 py-1 font-med font-display text-sm">
          <option value="">Location</option>
        </select>
        <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
        <div>
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
