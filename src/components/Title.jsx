import React from "react";

export default function Title() {
  return (
    <>
      <section className="flex items-center w-auto flex-col mt-12 mx-6 ">
        <div className="bg-brand flex justify-center rounded-full w-[479px] mt-6">
          <h1 className="font-display text-font-secondary font-xl text-xl text-center">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h1>
        </div>
        <div className="flex flex-col mt-6 items-center gap-2 ">
          <h1 className="font-display text-6xl leading-20 font-sm">
            Experience the Magic of Cinema:
          </h1>
          <h1 className=" text-6xl font-md font-secondary text-secondary">
            Book Your Tickets Today
          </h1>
        </div>
        <div className="mt-6">
          <p className="text-lg text-font-gray font-small font-display">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
      </section>
    </>
  );
}
