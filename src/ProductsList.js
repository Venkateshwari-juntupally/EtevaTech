// ProductsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsList.css'


const ProductsList = ({ products }) => {
  return (
    <>
    <div className='logo'>
      <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      <h1 className='heading'>ECommerce App</h1>
    </div>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </Link>
          <p>Price: Rs. {product.price}</p>
        </div>
      ))}
    </div>
    </>
  );
  
};

export default ProductsList;





