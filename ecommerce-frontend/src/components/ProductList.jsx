import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FilterSidebar = ({ show, onClose }) => {
  const [openAge, setOpenAge] = useState(true);
  const [openPriceCategories, setOpenPriceCategories] = useState(true);

  return (
    <>
      {show && (
  <div
  className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
  onClick={onClose}
></div>
      )}
<aside className={`fixed top-0 left-0 h-full bg-white shadow-lg z-100 md:z-50 w-72 transform ${show ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:relative md:translate-x-0 md:w-1/4 md:block`}>
  <div className="flex justify-between items-center border-b p-4">
    <h5 className="font-bold text-lg">Filters</h5>
    <button className="md:hidden text-2xl leading-none" onClick={onClose}>✕</button>
  </div>

  <div className="overflow-y-auto p-4 space-y-6">
    {/* Age Filter */}
    <div className="border rounded-lg p-3">
      <button onClick={() => setOpenAge(!openAge)} className="w-full flex justify-between items-center font-semibold text-base">
        Category
        <span className={`transform transition-transform ${openAge ? "rotate-0" : "rotate-180"}`}>▼</span>
      </button>
      {openAge && (
        <div className="mt-2 space-y-1">
          {["Shirts", "T-shirts", "Women T-shirts"].map((label, i) => (
            <label key={i} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-yellow-400" />
              <span>{label}</span>
            </label>
          ))}
        </div>
      )}
    </div>

    {/* Price Categories */}
    <div className="border rounded-lg p-3">
      <button onClick={() => setOpenPriceCategories(!openPriceCategories)} className="w-full flex justify-between items-center font-semibold text-base">
        Price Categories
        <span className={`transform transition-transform ${openPriceCategories ? "rotate-0" : "rotate-180"}`}>▼</span>
      </button>
      {openPriceCategories && (
        <div className="mt-2 space-y-1">
          {["Under ₹500", "₹500 - ₹1000", "Above ₹1000"].map((label, i) => (
            <label key={i} className="flex items-center space-x-2 text-sm">
              <input type="checkbox" className="accent-yellow-400" />
              <span>{label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  </div>
</aside>

    </>
  );
};

const ProductCard = ({ product, baseUrl }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
    <div className="bg-white overflow-hidden h-full">
      <Link to={`/product/${product._id}`}>
        <img
          src={
            product.image
              ? `${baseUrl}/${product.image}`
              : product.images?.[0]
              ? `${baseUrl}/${product.images[0]}`
              : "/no-image.jpg"
            // `${baseUrl}/${product.images[0]}`
          }
          alt={product.name}
          className="w-full h-80 object-fill"
        />
        <div className="p-4">
          <h6 className="font-semibold text-base mb-1">{product.name}</h6>
  <p className="text-xs text-gray-500 mb-1">
    {product.description}
          </p>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg font-bold text-black">₹{product.price}</span>
            <span className="text-gray-400 line-through">₹{product.originalPrice || (product.price + 100)}</span>
            <span className="text-orange-500 text-sm">(10%)</span>
          </div>
          <button className="w-full border border-yellow-400 text-black py-2 rounded hover:bg-yellow-50 text-sm font-semibold">
            ADD TO BAG
          </button>
        </div>

      </Link>
    </div>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const finalProducts = Array.isArray(data) ? data : data.products || [];
        setProducts(finalProducts);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, [baseUrl]);

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-6">
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="border px-4 py-2 rounded text-sm"
        >
          Show Filters
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar show={showFilters} onClose={() => setShowFilters(false)} />
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold">Products</h4>
            <select className="border px-2 py-1 rounded text-sm">
              <option>Sort by: Featured</option>
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
            </select>
          </div>
          <div className="flex flex-wrap -mx-2 gap-y-4">
            {products.length > 0 ? (
              products.map((p) => <ProductCard key={p._id} product={p} baseUrl={baseUrl} />)
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductList;
