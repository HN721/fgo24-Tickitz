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
    <nav className="flex justify-between items-center  mt-4 mx-6">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-12 items-center">
        <p className="text-primary font-display font-lg">HOME</p>
        <p className="text-font-navbar font-display font-md">MOVIE</p>
        <p className="text-font-navbar font-display font-md">BUY TICKET</p>
      </div>
      <div className="flex gap-3">
        <Button className={`bg-font-white  border-primary border `}>
          LOGIN
        </Button>
        <Button
          className={`bg-secondary   text-font-white  hover:bg-brand hover:text-font-secondary`}
        >
          SIGNUP
        </Button>
      </div>
    </nav>
  );
}
