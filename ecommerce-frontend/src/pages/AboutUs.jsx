import React from "react";
import aboutImage from "../assets/images/about-baner.jpg"; // Replace with your actual path
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
    const features = [
        {
          title: "Flattering Fits:",
          description:
            "Our bodycon dresses are crafted to enhance every curve with premium stretchable fabrics.",
        },
        {
          title: "Effortless Shopping:",
          description:
            "Browse, choose, and flaunt – our site makes fashion accessible and seamless to shop.",
        },
        {
          title: "Fashion that Empowers:",
          description:
            "At ThinkProduct, we’re all about bold confidence—each dress is designed to make a statement.",
        },
      ];
  return (
    <>
    <Header/>
    <section className="bg-white text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About ThinkProduct"
            className="rounded-lg shadow-xl max-h-[600px] object-cover w-full md:w-[90%]"
          />
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-600">ABOUT</span>{" "}
            <span className="text-black">US</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <span className="font-semibold text-black">ThinkProduct</span> is your
            go-to destination for premium fashion that speaks elegance,
            confidence, and modern style. We believe in celebrating every body
            type through bold and beautiful silhouettes—especially our signature{" "}
            <span className="font-bold">bodycon dresses</span> designed to turn
            heads.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our curated collections reflect the latest trends while maintaining
            timeless quality. Whether you're dressing up for a party or owning
            your everyday look, <span className="font-semibold">Chlothzy</span>{" "}
            ensures you're always fashion-forward with comfort and flair.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold">Chlothzy</span>, our mission is
            to empower individuals through style. We aim to offer easy access to
            high-quality, trendsetting apparel that makes you feel confident in
            your own skin—especially with our standout bodycon range.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-gray-500">WHY</span>{" "}
          <span className="text-black">CHOOSE US</span>
          <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border border-gray-200 divide-y md:divide-y-0 md:divide-x rounded-lg overflow-hidden">
          {features.map((item, index) => (
            <div key={index} className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutUs;
