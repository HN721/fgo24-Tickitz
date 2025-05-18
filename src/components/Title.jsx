import React from "react";

export default function Title() {
  return (
    <section className="flex items-center w-auto flex-col pt-24 mx-6 text-center">
      <div className="bg-brand flex justify-center rounded-full w-full max-w-[479px] mt-6 px-4">
        <h1 className="font-display text-font-secondary font-large text-xl">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </h1>
      </div>

      <div className="flex flex-col mt-6 items-center gap-2">
        <h1 className="font-display text-4xl md:text-6xl leading-tight md:leading-[4.5rem]">
          Experience the Magic of Cinema:
        </h1>
        <h1 className="text-4xl md:text-6xl font-large font-display text-secondary">
          Book Your Tickets Today
        </h1>
      </div>

      <div className="mt-6">
        <p className="text-base md:text-lg text-font-gray font-small font-display">
          Sign up and get the ticket with a lot of discount
        </p>
      </div>
    </section>
  );
}
