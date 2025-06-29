import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item._id === product._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-2">
      {/* Product Image */}
      <div>
        <img
          src={`${baseUrl}/${product.images[0]}`}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
        {/* Optional thumbnails */}
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={`${baseUrl}/${img}`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 rounded border object-cover"
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-yellow-600 mb-6">₹{product.price}</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
            className="w-24 border rounded p-2 text-center"
          />
        </div>

        <button
          onClick={addToCart}
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
        >
          Add to Cart
        </button>

        <ul className="mt-6 text-sm text-gray-500 space-y-1">
          <li>✅ 100% Original product</li>
          <li>✅ Cash on delivery available</li>
          <li>✅ Easy return/exchange within 7 days</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
