import React from "react";
import arrow from "../assets/arrow.svg";
import arrowRight from "../assets/arrow-right.svg";
import Movielist from "./Movielist";
import Button from "./Button";
/**
 * `Cinema` adalah komponen React yang menampilkan bagian "Now Showing in Cinemas".
 *
 * Komponen ini menampilkan header dengan teks di antara dua ikon panah,
 * daftar film yang sedang tayang menggunakan komponen `Movielist`,
 * dan tombol "VIEW ALL" di bagian bawah.
 *
 * @component
 * @example
 * return (
 *   <Cinema />
 * )
 */
export default function Cinema() {
  return (
    <>
      <section className="mt-12 mx-6 ">
        <div className="flex justify-between items-center">
          <img src={arrow} />
          <p className="font-display font-med text-primary text-4xl">
            Now Showing in Cinemas
          </p>
          <img src={arrowRight} />
        </div>
        <div className="mx-auto flex flex-col items-center gap-6 w-fit">
          <Movielist classType="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin max-w-[calc(12rem*5+1.5rem*3)] scrollbar-thumb-secondary scrollbar-track-gray-200" />
          <Button className="text-xs mb-4 bg-secondary w-max text-font-white hover:bg-brand hover:text-font-secondary">
            VIEW ALL
          </Button>
        </div>
      </section>
    </>
  );
}
