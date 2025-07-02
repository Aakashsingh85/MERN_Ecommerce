import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navLinks = ["Home", "Product", "About", "Contact"];

  // Load cart count from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);

    // Listen to cart changes in localStorage
    const handleStorage = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(updatedCount);
    };

    window.addEventListener("storage", handleStorage);

    // Optional: use polling if multiple tabs don't trigger storage event reliably
    const interval = setInterval(handleStorage, 500);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Think Ecommerce Logo" className="h-20 w-25" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
          {navLinks.map((link) => (
            <Link
            key={link}
            to={`/${link.toLowerCase()}`}
            className="relative group"
          >
              {link.toUpperCase()}
              <span className="block h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
        <Link to="/product">
          <HiOutlineSearch className="text-2xl cursor-pointer" />
          </Link>
          <Link to="/login">
            <HiOutlineUser className="text-2xl cursor-pointer" />
          </Link>

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <HiOutlineShoppingBag className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
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
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-gray-700 font-medium hover:text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </Link>

            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
