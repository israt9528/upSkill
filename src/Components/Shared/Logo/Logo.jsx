import React from "react";
import logo from "../../../assets/logo.jpeg";

const Logo = () => {
  return (
    <div>
      <a className="flex items-center gap-1 font-semibold text-[22px] bg-linear-to-r from-[#0C356A] via-[#39A7FF] to-[#793FDF] bg-clip-text text-transparent">
        <img src={logo} alt="" className="w-11 h-11 rounded-full" />
        UpSkills
      </a>
    </div>
  );
};

export default Logo;
