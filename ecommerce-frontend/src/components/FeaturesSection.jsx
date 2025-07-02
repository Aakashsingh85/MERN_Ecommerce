import React from "react";
import { FaExchangeAlt, FaHeadset } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaExchangeAlt size={40} className="text-black" />,
      title: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy",
    },
    {
      icon: <BsCheckCircleFill size={40} className="text-black" />,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      icon: <FaHeadset size={40} className="text-black" />,
      title: "Best customer support",
      description: "we provide 24/7 customer support",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
