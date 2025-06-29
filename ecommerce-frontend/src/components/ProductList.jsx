import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Image from '../../public/images/books'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const baseUrl=import.meta.env.VITE_BASE_URL


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {products.map(p => (
        <Link key={p._id} to={`/product/${p._id}`} className="border p-2">
          <img src={`${baseUrl}/${p.images[0]}`} alt={p.name} className="w-full h-32 object-cover" />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
