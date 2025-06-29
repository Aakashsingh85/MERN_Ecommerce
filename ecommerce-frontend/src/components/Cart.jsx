import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map(item =>
      item._id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = id => {
    const updatedCart = cart.filter(item => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="text-center mt-10">Your cart is empty</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item._id} className="flex items-center gap-4 border-b pb-2">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
              <div className="flex items-center gap-2 mt-1">
                <label>Qty:</label>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={e => updateQuantity(item._id, parseInt(e.target.value))}
                  className="w-16 border rounded p-1 text-center"
                />
              </div>
            </div>
            <button
              onClick={() => removeItem(item._id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-4">
        <p className="text-lg font-bold">Total: ₹{total.toFixed(2)}</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
