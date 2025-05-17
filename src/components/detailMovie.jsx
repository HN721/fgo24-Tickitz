import React from "react";
import movie from "../assets/jumbo.png";
import poster from "../assets/poster.png";

export default function DetailMovie() {
  return (
    <div className="relative rounded-[48px] overflow-hidden mt-20 max-w-7xl mx-auto">
      <div className="relative h-[480px] md:h-[520px]">
        <img
          src={movie}
          alt="Movie Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-opacity-50 z-10" />

        <div className="relative z-20 flex p-6 md:p-10 h-full items-end gap-6">
          <div className="hidden w-70 h-70 md:block flex-shrink-0">
            <img
              src={poster}
              alt="Poster"
              className=" rounded shadow-lg object-cover translate-y-10"
            />
          </div>

          {/* Info */}
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">JUMBO</h1>
            <p className="text-sm md:text-base mb-4">
              Don (Prince Poeltray), a chubby boy often mocked with the nickname
              "Jumbo," wants to get back at the kids who bully him. However, a
              spirit named Meri (Quinn Salman) asks for Don's help to be
              reunited with her family's grave, which has been vandalized.
            </p>
            <div className="flex gap-3">
              <span className="px-4 py-1 rounded-full border border-white text-white text-xs">
                Action
              </span>
              <span className="px-4 py-1 rounded-full border border-white text-white text-xs">
                Adventure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
