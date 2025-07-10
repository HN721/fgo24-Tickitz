import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, X, CircleUser } from "lucide-react";
import logo from "../assets/mv-logos.png";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const username = useSelector((state) => state.auth.Auth.results);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Menu Tengah */}
        <div className="flex-1 hidden md:flex justify-center gap-12 items-center">
          <Link to="/">
            <p className="text-primary hover:text-secondary font-display text-lg">
              HOME
            </p>
          </Link>
          <Link to="/Movie-list">
            <p className="text-font-navbar hover:text-secondary font-display text-md">
              MOVIE
            </p>
          </Link>
          <Link to="/Movie-list">
            <p className="text-font-navbar hover:text-secondary font-display text-md">
              BUY TICKET
            </p>
          </Link>
        </div>

        {/* User Icon / Login */}
        <div className="flex-1 hidden px-2 md:flex justify-end items-center">
          {username ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center text-primary"
              >
                <CircleUser size={28} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {username}
                  </div>
                  <Link
                    to="/profile-page"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800"
                  >
                    Profile
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button className="bg-font-white border border-primary text-primary">
                  LOGIN
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary">
                  SIGNUP
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className="text-primary font-display text-lg">HOME</p>
          </Link>
          <Link to="/Movie-list" onClick={() => setIsOpen(false)}>
            <p className="text-font-navbar font-display text-md">MOVIE</p>
          </Link>
          <Link to="/Movie-list" onClick={() => setIsOpen(false)}>
            <p className="text-font-navbar font-display text-md">BUY TICKET</p>
          </Link>

          {username ? (
            <div className="text-primary font-display text-lg">{username}</div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button className="bg-font-white border border-primary text-primary w-full">
                  LOGIN
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary w-full">
                  SIGNUP
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
