import React from "react";

export default function Subscribe() {
  return (
    <form action="">
      <div className="bg-brand p-8  mt-12 mb-12 rounded-4xl  mx-16">
        <h2 className="text-6xl font-display font-med text-primary leading-20 text-center mb-8">
          Subscribe to Our Newsletter
        </h2>

        <div className="flex flex-col  px-40 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your First Name"
              className="p-3 rounded-full border bg-white border-primary flex-1 focus:outline-none focus:ring-2 "
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 rounded-full border bg-white border-primary flex-1 focus:outline-none focus:ring-2 "
            />
          </div>

          <button className="bg-secondary hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-300">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </form>
  );
}
