import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-700 px-4 md:px-10 lg:px-20 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {/* Left: Logo + Description */}
        <div className="space-y-4">
          <Logo />
          <p className="text-gray-500">
            Academy LMS is your go-to platform for learning new skills online.
            Empower your career today.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Programs + Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Programs & Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Certifications
              </a>
            </li>
            <li>
              <a
                href="mailto:info@academylms.com"
                className="hover:text-primary transition"
              >
                info@academylms.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1234567890"
                className="hover:text-primary transition"
              >
                +1 234 567 890
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-10 flex justify-center gap-6 text-gray-500">
        <a href="#" className="hover:text-primary transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="hover:text-primary transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="hover:text-primary transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="#" className="hover:text-primary transition">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} UpSkills. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
