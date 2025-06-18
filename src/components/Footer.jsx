import React from "react";
import logo from "../assets/mv-logos.png";
import Ebu from "../assets/ebu.svg";
import CineOne from "../assets/cineOne.svg";
import Hiflix from "../assets/hiflix.svg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-primary rounded-t-4xl pb-12 pt-8 px-6 md:px-0">
      <div className="hidden md:flex flex-col gap-8 px-24">
        <div className="flex items-start justify-between">
          <img src={logo} className="w-1/2" alt="logo" />
          <div className="flex gap-12">
            <div>
              <h1 className="text-white font-display font-lg">EXPLORE</h1>
              <div className="flex flex-col gap-2 pt-3">
                <p className="text-white text-sm font-display">Cinemas</p>
                <p className="text-white text-sm font-display">Movies List</p>
                <p className="text-white text-sm font-display">My Ticket</p>
                <p className="text-white text-sm font-display">Notification</p>
              </div>
            </div>

            <div>
              <h1 className="text-white font-display font-lg">OUR SPONSOR</h1>
              <div className="flex flex-col gap-2 pt-3">
                <img src={Ebu} alt="Ebu" />
                <img src={CineOne} alt="CineOne" />
                <img src={Hiflix} alt="Hiflix" />
              </div>
            </div>

            <div>
              <h1 className="text-white font-display font-lg">FOLLOW US</h1>
              <div className="flex flex-col gap-3 pt-3 text-white text-sm">
                <div className="flex items-center gap-2">
                  <Facebook size={18} />
                  <p>Moxtar.cinema.id</p>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram size={18} />
                  <p>Moxtar.cinema.id</p>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter size={18} />
                  <p>Moxtar.cinema.id</p>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube size={18} />
                  <p>Moxtar.cinema.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-white text-xs">
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
          <p className="text-white text-xs">
            © 2025 Movxtar. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 md:hidden text-center items-center">
        <img src={logo} alt="logo" />
        <p className="text-white text-sm max-w-md">
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </p>

        <div className="flex flex-col gap-8 text-white text-sm">
          <div>
            <h1 className="font-semibold mb-2">EXPLORE</h1>
            <div className="flex flex-col gap-1">
              <p>Cinemas</p>
              <p>Movies List</p>
              <p>My Ticket</p>
              <p>Notification</p>
            </div>
          </div>

          <div>
            <h1 className="font-semibold mb-2">OUR SPONSOR</h1>
            <div className="flex flex-col gap-2 items-center">
              <img src={Ebu} alt="Ebu" />
              <img src={CineOne} alt="CineOne" />
              <img src={Hiflix} alt="Hiflix" />
            </div>
          </div>

          <div>
            <h1 className="font-semibold mb-2">FOLLOW US</h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 justify-center">
                <Facebook size={18} />
                <p>Movxtar.cinema.id</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Instagram size={18} />
                <p>Movxtar.cinema.id</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Twitter size={18} />
                <p>Movxtar.cinema.id</p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Youtube size={18} />
                <p>Movxtar.cinema.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white text-xs mt-8 text-center">
          © 2025 Movxtar. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
