import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Midnight Muse Bodycon", price: 1999, image: "/images/midnight-muse.jpg" },
  { id: 2, name: "Blush Bloom Bodycon", price: 1999, image: "/images/blush-bloom.jpg" },
  { id: 3, name: "Noir Nights Mini Bodycon", price: 1999, image: "/images/noir-nights.jpg" },
  { id: 4, name: "Pastel Muse Bodycon", price: 2999, image: "/images/pastel-muse.jpg" },
  { id: 5, name: "Emerald Allure Bodycon", price: 1899, image: "/images/emerald-allure.jpg" },
  { id: 6, name: "Sky Serenity Bodycon", price: 1999, image: "/images/sky-serenity.jpg" },
  { id: 7, name: "Midnight Elegance Bodycon", price: 1999, image: "/images/midnight-elegance.jpg" },
  { id: 8, name: "Crimson Allure Bodycon Dress", price: 1999, image: "/images/crimson-allure.jpg" },
  { id: 9, name: "Silver Starlit Glam Bodycon Dress", price: 1999, image: "/images/silver-starlit.jpg" },
  { id: 10, name: "Midnight Edge Black Denim Bodycon", price: 1999, image: "/images/midnight-edge.jpg" },
];

const LatestCollections = () => {
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
          LATEST <span className="text-yellow-600">COLLECTIONS</span>
        </h2>
        <p className="text-gray-500 mt-2">
          ThinkProduct latest collection is where elegance meets trend. Fashion that speaks your style.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product._id}`} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img
              src={`${baseUrl}/${product.images[0]}`}
              alt={product.name}
              className="w-full h-80 object-fill"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
              <p className="text-yellow-600 font-semibold">Rs.{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestCollections;
