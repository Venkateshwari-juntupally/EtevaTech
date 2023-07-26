// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.js'

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
