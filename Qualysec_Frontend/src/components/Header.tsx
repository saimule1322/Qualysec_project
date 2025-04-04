import React from "react";
import { Link } from "react-router-dom"; // ✅ Removed invalid import

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-8 px-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">
          <img
            src="https://qualysec.com/wp-content/uploads/2024/09/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex text-[16px] font-semibold space-x-20">
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="/Services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link to="/solutions" className="text-gray-700 hover:text-blue-600">
            Solutions
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="/resource" className="text-gray-700 hover:text-blue-600">
            Resource
          </Link>
        </nav>

        {/* Contact Us Button */}
        <div className="hover:border-2 py-4 px-1 rounded-full hover:border-[#334155]">
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#3076F8] to-[#FB62F6] px-5 py-3 font-bold text-white rounded-full transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
