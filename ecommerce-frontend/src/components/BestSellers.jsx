import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestSellers = () => {
    const [products, setProducts] = useState([]);
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
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          BEST <span className="text-yellow-600">SELLERS</span>
        </h2>
        <p className="text-gray-500 mt-2">
           Best Sellers is where elegance meets trend. Fashion that speaks your style.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product._id}`} className=" overflow-hidden hover:shadow-lg transition">
            <img
              src={`${baseUrl}/${product.images[1]}`}
              alt={product.name}
              className="w-full h-80 object-fill"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
              <p className="text-gray-800 font-semibold">Rs.{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
