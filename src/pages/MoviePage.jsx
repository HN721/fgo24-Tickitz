import React from "react";
import Navbar from "../components/Navbar";
import Movieweek from "../components/Movieweek";
import Filtering from "../components/Filtering";
import Movielist from "../components/Movielist";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
export default function MoviePage() {
  return (
    <div className=" flex-col mx-12 ">
      <Navbar />
      <Movieweek />
      <Filtering />
      <div className="flex flex-col justify-center w-full mb-12">
        <Movielist classType="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-3" />
        <div className="flex items-center space-x-2 mt-6 justify-center">
          {/* Page 1 (active) */}
          <button className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold">
            1
          </button>

          {/* Page 2 */}
          <button className="w-10 h-10 rounded-full border border-black text-black font-bold">
            2
          </button>

          {/* Page 3 */}
          <button className="w-10 h-10 rounded-full border border-black text-black font-bold">
            3
          </button>

          {/* Page 4 */}
          <button className="w-10 h-10 rounded-full border border-black text-black font-bold">
            4
          </button>

          {/* Next arrow */}
          <button className="w-10 h-10 rounded-full bg-secondary text-white font-bold">
            →
          </button>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}
