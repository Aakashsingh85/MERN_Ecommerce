import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList1 = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">
          ALL <span className="text-black">COLLECTIONS</span>
        </h2>
        <div className="flex gap-2">
          <button
            className="border px-4 py-2 rounded text-sm md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            FILTERS
          </button>
          <select className="border px-4 py-2 rounded text-sm">
            <option>Sort by: Relevant</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Sidebar */}
        <div
          className={`${
            showFilters ? 'block' : 'hidden'
          } fixed inset-0 bg-white z-50 p-6 overflow-y-auto md:static md:block md:w-1/4 md:bg-transparent md:p-0 md:z-0`}
        >
          {/* Close button for mobile */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h3 className="text-lg font-semibold">FILTERS</h3>
            <button
              className="text-xl"
              onClick={() => setShowFilters(false)}
            >
              ✕
            </button>
          </div>

          <div className="mb-6 border rounded p-4">
            <h4 className="font-medium mb-2">CATEGORIES</h4>
            <div className="flex flex-col gap-2 text-sm">
              <label><input type="checkbox" className="mr-2" />Men</label>
              <label><input type="checkbox" className="mr-2" />Women</label>
              <label><input type="checkbox" className="mr-2" />Kids</label>
            </div>
          </div>

          <div className="border rounded p-4">
            <h4 className="font-medium mb-2">TYPE</h4>
            <div className="flex flex-col gap-2 text-sm">
              <label><input type="checkbox" className="mr-2" />Topwear</label>
              <label><input type="checkbox" className="mr-2" />Bottomwear</label>
              <label><input type="checkbox" className="mr-2" />Winterwear</label>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(p => (
            <Link
              key={p._id}
              to={`/product/${p._id}`}
              className="block border hover:shadow-lg rounded-lg overflow-hidden transition"
            >
              <img
                src={`${baseUrl}/${p.images[0]}`}
                alt={p.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium truncate">{p.name}</h3>
                <p className="text-blue-800 font-bold">₹{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList1;
