import React, { useState } from "react";
import { NavLink } from "react-router";
import { FiSearch, FiUser, FiX } from "react-icons/fi"; // Added FiX for closing search
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative px-1 py-2 transition-all duration-300 hover:text-primary ${
              isActive ? "text-primary font-bold" : "text-base-content/70"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-courses"
          className={({ isActive }) =>
            `relative px-1 py-2 transition-all duration-300 hover:text-primary ${
              isActive ? "text-primary font-bold" : "text-base-content/70"
            }`
          }
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink className="relative px-1 py-2 text-base-content/70 transition-all duration-300 hover:text-primary">
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink className="relative px-1 py-2 text-base-content/70 transition-all duration-300 hover:text-primary">
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-md px-4 md:px-10 lg:px-16 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div
        className={`absolute inset-0 bg-base-100 z-50 flex items-center px-4 transition-all duration-300 ${
          isSearchOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="relative w-full flex items-center gap-2">
          <FiSearch className="absolute left-4 text-base-content/50" />
          <input
            type="text"
            placeholder="Search for courses..."
            className="input input-bordered w-full pl-12 rounded-full bg-base-200/50 border-none focus:outline-none"
            autoFocus={isSearchOpen}
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="btn btn-ghost btn-circle"
          >
            <FiX className="text-xl" />
          </button>
        </div>
      </div>

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden px-2">
            <HiMenuAlt3 className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-4 w-64 rounded-2xl bg-base-100 p-6 shadow-2xl border border-base-200 space-y-4"
          >
            {navLinks}
            <div className="divider"></div>
            <button className="btn btn-ghost btn-sm justify-start gap-3">
              <FiUser /> Login
            </button>
            <button className="btn btn-primary btn-sm">Get Started</button>
          </ul>
        </div>
        <div className="ml-2 lg:ml-0">
          <Logo />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-8 text-[13px] font-medium tracking-wider uppercase">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end gap-2 md:gap-4">
        <div className="relative hidden md:flex items-center">
          <FiSearch className="absolute left-3 text-base-content/40" />
          <input
            type="text"
            placeholder="Search..."
            className="input input-sm input-bordered pl-10 w-32 focus:w-60 transition-all duration-500 rounded-full bg-base-200/50 border-none focus:bg-base-100 focus:shadow-inner"
          />
        </div>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="btn btn-ghost btn-circle md:hidden"
        >
          <FiSearch className="text-xl" />
        </button>

        <div className="hidden lg:flex items-center gap-3">
          <button className="btn btn-ghost btn-sm font-semibold px-5 hover:bg-primary/5 text-primary border border-primary/20 rounded-xl">
            Login
          </button>
          <button className="btn btn-primary btn-sm px-6 rounded-xl shadow-md shadow-primary/20 text-white border-none">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
