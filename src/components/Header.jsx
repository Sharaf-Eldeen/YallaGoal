import React from "react";
import { FaTelegramPlane, FaYoutube, FaFacebook, FaMoon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md px-10 ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-green-400"
        >
          YallaGoal
        </Link>
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <FaMoon size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="p-2 bg-black rounded-lg hover:bg-gray-800 transition"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
