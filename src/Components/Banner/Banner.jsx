import React from "react";
import { FiPlayCircle, FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative h-[80vh] w-full flex items-center overflow-hidden">
      {/* Background with sophisticated overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/src/assets/hero.jpeg')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"></div>

      {/* Content Area */}
      <div className="container mx-auto px-6 md:px-10 lg:px-20 z-10">
        <div className="flex flex-col gap-6 w-full lg:w-[60%] animate-in fade-in slide-in-from-left duration-1000">
          {/* Subtle Badge */}
          <span className="w-fit px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary-content/60 text-sm font-semibold tracking-wide backdrop-blur-md">
            🚀 New Semester is Live
          </span>

          {/* Enhanced Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
            Up your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-content">
              Skills
            </span>{" "}
            <br />
            for a better future
          </h1>

          {/* Refined Paragraph */}
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
            UpSkill helps you learn in-demand skills through expert-led courses
            designed for real-world success. Learn at your own pace and grow.
          </p>

          {/* Sophisticated Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary btn-lg px-10 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all border-none text-white group">
              Join Now
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
