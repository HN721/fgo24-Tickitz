import React from "react";
import logo from "../assets/logo.svg";
import Ebu from "../assets/ebu.svg";
import CineOne from "../assets/cineOne.svg";
import Hiflix from "../assets/hiflix.svg";
import {
  Facebook,
  FacebookIcon,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-primary rounded-t-4xl pb-12">
      <div className="flex items-center justify-between mx-22">
        <div>
          <img src={logo} alt="" />

          <p className="text-white">
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>
        <div className="flex justify-between  gap-12">
          <div>
            <h1 className="text-white fon font-display font-lg">EXPLORE</h1>
            <div className=" flex flex-col gap-2 pt-3">
              <p className="text-white text-sm font-small font-display">
                Cinemas
              </p>
              <p className="text-white text-sm font-small font-display">
                Movies List
              </p>
              <p className="text-white text-sm font-small font-display">
                My Ticket
              </p>
              <p className="text-white text-sm font-small font-display">
                Notification
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-white">OUR SPONSOR</h1>
            <div className="text-white flex flex-col gap-2  pt-3">
              <div>
                <img src={Ebu} alt="Ebu" />
              </div>
              <div>
                <img src={CineOne} alt="CineOne" />
              </div>
              <div>
                <img src={Hiflix} alt="Hiflix" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-white">FOLLOW US</h1>
            <div className="text-white pt-3 flex gap-2">
              <Facebook />
              <p>tickitz.cinema.id</p>
            </div>
            <div className="text-white pt-3 flex gap-2">
              <Instagram />
              <p>tickitz.cinema.id</p>
            </div>
            <div className="text-white pt-3 flex gap-2">
              <Twitter />
              <p>tickitz.cinema.id</p>
            </div>
            <div className="text-white pt-3 flex gap-2">
              <Youtube />
              <p>tickitz.cinema.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
