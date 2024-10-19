import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import './RecommendedPrice.css';

const RecommendedPrice = ({ minPrice, maxPrice, currentPrice }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isOutofRange = currentPrice < minPrice || currentPrice > maxPrice;

  const marks = !isOutofRange
  ? [{
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`
    }]
  : [];

  return (
    <div className="recommended-price">
      <p>추천 가격 범위</p>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        step={1000}  
        marks={marks}
      />
      {isOutofRange && (
        <div className="out-of-range-marker">
          <span className="marker-label">{`현재가격 ${currentPrice.toLocaleString()}`}</span>
        </div>
      )}
      <div className="price-range">
        <span>{value[0].toLocaleString()}원</span>  <span>{value[1].toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default RecommendedPrice;
