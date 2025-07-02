import React from "react";

const SubscribeSection = () => {
  return (
    <section className="max-w-3xl mx-auto text-center py-12 px-4">
      <p className="text-sm font-semibold text-gray-700">
        Join the Chlothzy Style Community
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
        Subscribe now &amp; get 20% off
      </h2>
      <p className="text-gray-600 mt-1">
        Chlothzy Fashion – Where Style Meets Confidence.
      </p>

      <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
