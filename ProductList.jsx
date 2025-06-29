import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/products'); // ✅ backend URL
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };

    getProducts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <p><strong>Rating:</strong> {product.rating}</p>
              <img src={product.image} alt={product.name} style={{ width: '150px' }} />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
