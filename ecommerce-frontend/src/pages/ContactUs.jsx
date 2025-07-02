import React from "react";
import contactImage from "../assets/images/Contact-Us-Page.jpg"; // Update this path as needed
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
    <Header/>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          CONTACT <span className="text-gray-700">US</span>
          <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={contactImage}
              alt="Contact Us"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
