import React, { useState } from "react";
import logo from "../assets/movxar.png";
import Button from "./Button";
import { CircleUser, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.Auth.user);
  const username = user?.username;

  console.log(username);

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
            <p className="text-primary hover:text-secondary active:text-secondary font-display text-lg">
              HOME
            </p>
          </Link>
          <Link to={"/Movie-list"}>
            <p className="text-font-navbar hover:text-secondary active:text-secondary font-display text-md">
              MOVIE
            </p>
          </Link>
          <Link to={"/Movie-list"}>
            <p className="text-font-navbar hover:text-secondary active:text-secondary font-display text-md">
              BUY TICKET
            </p>
          </Link>
        </div>

        {username ? (
          <div>
            <Link to={"/profile-page"}>
              <div className=" hidden  md:flex items-center gap-4">
                <CircleUser width={30} height={30} />
                <h1 className=" hover:text-secondary active:text-secondary font-display text-2xl ">
                  {username}
                </h1>
              </div>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex gap-3">
            <Link to={"/login"}>
              <Button className="bg-font-white border border-primary text-primary">
                LOGIN
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary">
                SIGNUP
              </Button>
            </Link>
          </div>
        )}

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
          {username ? (
            <div>{username}</div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              <Button className="bg-font-white border border-primary text-primary w-full">
                LOGIN
              </Button>
              <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary w-full">
                SIGNUP
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
