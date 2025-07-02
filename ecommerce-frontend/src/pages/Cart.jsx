import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SubscribeSection";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cart.length ? 10 : 0;
  const total = subtotal + shippingFee;

  return (
    <>
      <Header />
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-gray-500">YOUR</span>{" "}
            <span className="text-black">CART</span>
            <div className="w-16 h-1 bg-black mt-2"></div>
          </h2>

          {/* Empty State */}
          {cart.length === 0 ? (
            <div className="text-center py-20 text-xl text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="overflow-x-auto">
                <div className="flex flex-col gap-6 border-t border-b border-gray-200 py-6">
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col md:flex-row items-center gap-6"
                    >
                      <img
                        src={`${baseUrl}/${item.images[0]}`}
                        alt={item.name}
                        className="w-28 h-36 rounded-md object-cover"
                      />

                      <div className="flex-1 w-full">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600 mt-1">Rs. {item.price}</p>
                        <p className="inline-block border px-3 py-1 mt-2">
                          {item.size}
                        </p>
                      </div>

                      <div className="w-full md:w-24">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item._id, parseInt(e.target.value))
                          }
                          className="w-full border px-3 py-2 rounded text-center"
                        />
                      </div>

                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-red-500 hover:text-red-700 text-2xl"
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="mt-12 md:flex justify-end">
                <div className="w-full md:w-1/2 lg:w-1/3 border p-6 rounded-md shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">
                    <span className="text-gray-500">CART</span>{" "}
                    <span className="text-black">TOTALS</span>
                    <div className="w-16 h-1 bg-black mt-2"></div>
                  </h3>

                  <div className="flex justify-between py-2">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
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
            </>
          )}
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Cart;
