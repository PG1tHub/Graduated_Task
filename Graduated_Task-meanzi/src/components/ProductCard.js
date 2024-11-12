import React from 'react';
import './ProductCard.css';
import CheckImg from '../images/check.png';
//import Images from './Images';

const ProductCard = ({ product }) => {
  // time을 '년도-월-일' 형태로 포맷
  const formattedDate = new Date(product.time).toISOString().slice(0, 10);
  //const productImage = Images[product.itemName] || Images['default'];
  return (
    <div className="product-card">
      <img src={localStorage.getItem(product.image)} alt={product.itemName} className="products-image" />
      <div className="products">
        <div className="product-title">
          {product.priceSimilar ? <img src={CheckImg} alt="범위추천" className="checkIcon"/> : ""} {product.itemName}
        </div>
        <div className="price">{product.price.toLocaleString()}원</div>
        <div className="description">{product.description}</div>
        <p className="product-date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default ProductCard;
