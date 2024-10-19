import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import './RecommendedPrice.css';

const RecommendedPrice = ({ minPrice, maxPrice, currentPrice }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = [
    {
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`
    }
  ]

  return (
    <div className="recommended-price">
      <p>추천 가격 범위</p>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        step={1000}  // 조정할 수 있는 금액 단위
        marks={marks}
      />
      <div className="price-range">
        <span>{value[0].toLocaleString()}원</span> ~ <span>{value[1].toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default RecommendedPrice;
