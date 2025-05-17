import React from "react";
import logo from "../assets/react.svg";
import Button from "./Button";

/**
 * @param {string | undefined} className String of CSS CLass Name
 * @param {svg} src import logo only svg
 * @returns
 */
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md  flex justify-between items-center py-4 px-6">
      <div>
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="flex gap-12 items-center">
        <p className="text-primary font-display text-lg">HOME</p>
        <p className="text-font-navbar font-display text-md">MOVIE</p>
        <p className="text-font-navbar font-display text-md">BUY TICKET</p>
      </div>
      <div className="flex gap-3">
        <Button className="bg-font-white border border-primary text-primary">
          LOGIN
        </Button>
        <Button className="bg-secondary text-white hover:bg-brand hover:text-font-secondary">
          SIGNUP
        </Button>
      </div>
    </nav>
  );
}
