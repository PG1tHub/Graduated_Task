import React from 'react';
import './ProductCard.css';
import MoonImg from '../images/moon.png';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} className="products-image" />
      <div className="products">
        <div class="product-title">
          {product.isPriceSimilar ? <img src={MoonImg} alt="웃음" className="emoty"/> : ""} {product.title}
        </div>
        <div className="price">{product.price.toLocaleString()}원</div>
        <div className="description">{product.description}</div>
        <p class="product-date">{product.createdAt}</p>
      </div>
    </div>
  );
}

export default ProductCard;
