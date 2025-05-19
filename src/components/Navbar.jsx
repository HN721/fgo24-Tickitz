import React, { useState } from "react";
import logo from "../assets/react.svg";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // pastikan kamu install lucide-react
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4">
      <div
        className="max-w-7xl mx-auto flex justify-between
       items-center"
      >
        <div>
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex gap-12 items-center">
          <Link to={"/"}>
            <p className="text-primary font-display text-lg">HOME</p>
          </Link>
          <Link to={"/Movie-list"}>
            {" "}
            <p className="text-font-navbar font-display text-md">MOVIE</p>
          </Link>
          <Link to={"/Detail-movie:id"}>
            {" "}
            <p className="text-font-navbar font-display text-md">BUY TICKET</p>
          </Link>
        </div>

        <div className="hidden md:flex gap-3">
          <Link to={"/login"}>
            <Button className="bg-font-white border border-primary text-primary">
              LOGIN
            </Button>
          </Link>
          <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary">
            SIGNUP
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg px-6 py-4 space-y-4">
          <Link to={"/"}>
            <p className="text-primary font-display text-lg">HOME</p>
          </Link>
          <Link to={"/Movie-list"}>
            <p className="text-font-navbar font-display text-md">MOVIE</p>
          </Link>
          <p className="text-font-navbar font-display text-md">BUY TICKET</p>
          <div className="flex flex-col gap-3 mt-4">
            <Button className="bg-font-white border border-primary text-primary w-full">
              LOGIN
            </Button>
            <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary w-full">
              SIGNUP
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
