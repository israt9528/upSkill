import React from "react";
import { NavLink } from "react-router";
import { FiSearch } from "react-icons/fi";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-medium">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-courses" className="font-medium">
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink className="font-medium">Articles</NavLink>
      </li>
      <li>
        <NavLink className="font-medium">About Us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 shadow-md px-4 md:px-10 lg:px-20">
      {/* LEFT */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-56 rounded-box bg-base-100 p-4 shadow space-y-2"
          >
            {navLinks}
            <li>
              <button className="btn btn-outline w-full">Login</button>
            </li>
            <li>
              <button className="btn btn-primary w-full">Signup</button>
            </li>
          </ul>
        </div>

        <Logo />
      </div>

      {/* CENTER (Desktop Links) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">{navLinks}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-2">
        {/* Mobile Search Icon */}
        <button className="btn btn-ghost lg:hidden">
          <FiSearch className="text-xl" />
        </button>

        {/* Desktop Search */}
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-40 hidden lg:block"
        />

        {/* Desktop Buttons */}
        <button className="btn btn-outline hidden lg:block">Login</button>
        <button className="btn btn-primary hidden lg:block">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
