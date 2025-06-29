import React, { useState } from "react";
import { HiOutlineSearch, HiOutlineUser, HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "Collection", "About", "Contact"];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="images/logo.png" alt="Think Eccommerce Logo" className="h-20 w-25" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="relative group">
              {link.toUpperCase()}
              <span className="block h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <HiOutlineSearch className="text-2xl cursor-pointer" />
          <HiOutlineUser className="text-2xl cursor-pointer" />
          <div className="relative cursor-pointer">
            <HiOutlineShoppingBag className="text-2xl" />
            <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 font-medium hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
