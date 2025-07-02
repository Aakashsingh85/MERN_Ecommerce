import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import cartImage from "../assets/images/about-baner.jpg"; // replace with your image path
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";

const Cart = () => {
  const product = {
    name: "Noir Nights Mini Bodycon",
    price: 1999,
    size: "S",
    quantity: 1,
    image: cartImage,
  };

  const shippingFee = 10;
  const total = product.price * product.quantity + shippingFee;

  return (
    <>
    <Header/>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cart Title */}
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-gray-500">YOUR</span> <span className="text-black">CART</span>
          <div className="w-16 h-1 bg-black mt-2"></div>
        </h2>

        {/* Cart Items */}
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-6 border-t border-b border-gray-200 py-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img src={product.image} alt={product.name} className="w-28 h-36 rounded-md object-cover" />

              <div className="flex-1 w-full">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-1">Rs. {product.price}</p>
                <p className="inline-block border px-3 py-1 mt-2">{product.size}</p>
              </div>

              <div className="w-full md:w-24">
                <input
                  type="number"
                  min="1"
                  defaultValue={product.quantity}
                  className="w-full border px-3 py-2 rounded text-center"
                />
              </div>

              <button className="text-red-500 hover:text-red-700 text-2xl">
                <HiOutlineTrash />
              </button>
            </div>
          </div>
        </div>

        {/* Totals */}
        <div className="mt-12 md:flex justify-end">
          <div className="w-full md:w-1/2 lg:w-1/3 border p-6 rounded-md shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gray-500">CART</span> <span className="text-black">TOTALS</span>
              <div className="w-16 h-1 bg-black mt-2"></div>
            </h3>

            <div className="flex justify-between py-2">
              <span>Subtotal</span>
              <span>Rs. {product.price.toFixed(2)}</span>
            </div>

            <div className="flex justify-between py-2">
              <span>Shipping Fee</span>
              <span>Rs. {shippingFee.toFixed(2)}</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
    <SubscribeSection/>
    <Footer/>
    </>
  );
};

export default Cart;
