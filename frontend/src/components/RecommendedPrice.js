import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './RecommendedPrice.css';

const RecommendedPrice = ({ minPrice = 0, maxPrice = 0, currentPrice = 0 }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isOutofRange = currentPrice < minPrice || currentPrice > maxPrice;

  const min = currentPrice < minPrice ? currentPrice : minPrice;
  const max = currentPrice > maxPrice ? currentPrice : maxPrice;

  const marks = [
    {
      value: min,
      // label: `${minPrice.toLocaleString()}원`,
    },
    {
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
    },
    {
      value: maxPrice,
      // label: `${maxPrice.toLocaleString()}원`,
    },
  ];

  if (currentPrice > maxPrice) {
    marks.push({
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
    });
  }

  if (currentPrice < minPrice) {
    marks.unshift({
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
        min={min}
        max={max}
        step={null}  
        marks={marks}
        className={`recommended-price ${isOutofRange ? 'out-of-range' : ''}`}
        disabled
      />
      <div className="price-range">
        <span>{minPrice.toLocaleString()}원</span>  
        <span>{maxPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default RecommendedPrice;
