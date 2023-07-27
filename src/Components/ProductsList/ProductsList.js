import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import './ProductsList.css'

const ProductsList = () => {
  return (
    <div className="product-list">
      {productsData.map((product) => {
        return (
          <div key={product.id} className="product-item">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </Link>
          <p>Price: Rs. {product.price}</p>
        </div>
        )
        })}
    </div>
  );
};

export default ProductsList;





