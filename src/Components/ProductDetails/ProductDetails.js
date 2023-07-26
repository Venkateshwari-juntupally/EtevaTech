// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import './ProductDetails.js'
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className='price'>Price: Rs. {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
