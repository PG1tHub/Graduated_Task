import React from 'react';
import './ProductCard.css';
import CheckImg from '../images/check.png';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} className="products-image" />
      <div className="products">
        <div className="product-title">
          {product.isPriceSimilar ? <img src={CheckImg} alt="웃음" className="emoty"/> : ""} {product.title}
        </div>
        <div className="price">{product.price.toLocaleString()}원</div>
        <div className="description">{product.description}</div>
        <p className="product-date">{product.createdAt}</p>
      </div>
    </div>
  );
}

export default ProductCard;
