import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-yellow-100 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Your <span className="text-yellow-600">Perfect Style</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Explore the latest trends in fashion at unbeatable prices. Make every outfit count with ThinkAcademyProduct.
          </p>
          <a
            href="#collection"
            className="inline-block bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="images/books/product5.jpg"
            alt="Fashion Collection"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
