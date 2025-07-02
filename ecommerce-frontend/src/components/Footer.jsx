import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mb-2">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        
        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/logo.png" alt="ThinkAcademy Logo" className="h-20 w-25" /> 
          </div>
          <p className="text-sm">
            Think Academy Fashion brings bold elegance to your wardrobe. From bodycon dresses to chic essentials, we redefine style. Perfect fits, premium fabrics — confidence in every thread. Step into the spotlight with Think Academy — where fashion speaks.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About Us</a></li>
            <li><a href="/product" className="hover:text-black">Product</a></li>
            <li><a href="/privacy-policy" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-2">GET IN TOUCH</h3>
          <p><strong>Phone:</strong> 9795984505</p>
          <p><strong>Email:</strong> contact@thinkacademy.shop</p>
          <p className="mt-2"><strong>Address:</strong><br/>
          Sector 63 H-block, Noida<br/>
          Uttar Pradesh - 201301
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 mt-6 mb-3 pt-4 text-center text-sm">
        <p>Copyright 2025© thinkacademy.shop - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
