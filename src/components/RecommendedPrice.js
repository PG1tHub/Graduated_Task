import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './RecommendedPrice.css';

const RecommendedPrice = ({ minPrice, maxPrice, currentPrice }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isOutofRange = currentPrice < minPrice || currentPrice > maxPrice;

  const marks = [
    {
      value: minPrice,
    },
    {
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
    },
    {
      value: maxPrice,
    },
  ];

  if (currentPrice > maxPrice) {
    marks.push({
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
    });
  }

  if (currentPrice < minPrice) {
    marks.push({
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
    }); 
  }

  return (
    <div className={`recommended-price ${isOutofRange ? 'out-of-range' : ''}`}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={isOutofRange ? (currentPrice > maxPrice ? currentPrice : currentPrice) : maxPrice}
        step={1000}  
        marks={marks}
        disabled
      />
      <div className="price-range">
        <span>{value[0].toLocaleString()}원</span>  
        <span>{value[1].toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default RecommendedPrice;
