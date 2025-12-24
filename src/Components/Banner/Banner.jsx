import React from "react";

const Banner = () => {
  return (
    <div className="h-[75vh] bg-[url('/src/assets/hero.jpeg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex flex-col gap-5 p-20 pt-34 w-[50%]">
        <h1 className="text-5xl font-bold">
          Up your Skills for a better future
        </h1>
        <p className="text-xl">
          UpSkill helps you learn in-demand skills through expert-led courses
          designed for real-world success. Learn at your own pace and grow your
          career with confidence.
        </p>
        <button className="btn w-fit">Join Now</button>
      </div>
    </div>
  );
};

export default Banner;
