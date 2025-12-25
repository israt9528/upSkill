import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../../assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="bg-primary text-white px-4 md:px-10 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-1 text-2xl font-semibold">
            <img src={logo} alt="" className="h-11 w-11 rounded-full" />
            <h1 className="bg-linear-to-r from-primary-content to-secondary bg-clip-text text-transparent">
              UpSkills
            </h1>
          </div>
          <p className="text-white/80">
            UpSkill is a skill development platform offering a wide range of
            industry-relevant courses. Explore detailed course information,
            enroll with confidence, and build the skills you need to advance
            your career and achieve your goals.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-primary-content transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-content transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-content transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-content transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Programs & Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-primary-content transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-content transition">
                Certifications
              </a>
            </li>
            <li>
              <a
                href="mailto:info@UpSkills.com"
                className="hover:text-primary-content transition"
              >
                info@academylms.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="hover:text-primary-content transition"
              >
                +1 234 567 890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex gap-6 text-white">
        <a href="#" className="hover:text-primary-content transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="hover:text-primary-content transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="hover:text-primary-content transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="#" className="hover:text-primary-content transition">
          <FaInstagram size={20} />
        </a>
      </div>

      <div className="mt-6 text-center text-gray-400 text-sm border-t border-t-gray-500/50 pt-5">
        &copy; {new Date().getFullYear()} UpSkills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
