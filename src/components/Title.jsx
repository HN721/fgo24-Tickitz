import React from "react";

export default function Title() {
  return (
    <section className="relative flex items-center w-auto flex-col pt-24 mx-6 text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute "></div>

        {/* Floating Cinema Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-25 animate-ping"></div>

        {/* Rotating Film Reels */}
        <div className="absolute top-32 right-32 w-24 h-24 opacity-10">
          <div className="w-full h-full border-4 border-purple-500 rounded-full animate-spin relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-purple-500 rounded-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-16 w-20 h-20 opacity-10">
          <div className="w-full h-full border-4 border-blue-500 rounded-full animate-spin animation-delay-1000 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-blue-500 rounded-full"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center">
        <div className="bg-gradient-to-r from-secondary to-brand flex justify-center rounded-full w-full max-w-[479px] mt-6 px-4 py-3 shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse">
          <h1 className="text-white font-bold text-xl tracking-wide">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h1>
        </div>

        <div className="flex flex-col mt-8 items-center gap-4">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight md:leading-[4.5rem] text-gray-800 animate-fade-in-up">
            Experience the Magic of Cinema:
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-blue-600 to-brand bg-clip-text text-transparent animate-fade-in-up animation-delay-500">
            Book Your Tickets Today
          </h1>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mt-8">
          <p className="text-base md:text-lg text-gray-600 font-medium animate-fade-in-up animation-delay-1000">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>

        {/* Floating Action Elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
