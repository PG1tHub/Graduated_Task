import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import './RecommendedPrice.css';

const SellRecommendedPrice = ({ recommendedMinPrice = 0, recommendedMaxPrice = 0, price = 0 }) => {
  const [value, setValue] = useState([recommendedMinPrice, recommendedMaxPrice]);

  useEffect(() => {
    setValue([recommendedMinPrice, recommendedMaxPrice]);
  }, [recommendedMinPrice, recommendedMaxPrice, price]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isOutOfRange = price < recommendedMinPrice || price > recommendedMaxPrice;


  const min = price < recommendedMinPrice ? price : recommendedMinPrice;
  const max = price > recommendedMaxPrice ? price : recommendedMaxPrice;

  const marks = [
    {
      value: min,
      // label: `${min.toLocaleString()}원`,
    },
    {
      value: price,
      label: `${price.toLocaleString()}원`,
    },
    {
      value: recommendedMaxPrice,
      // label: `${recommendedMaxPrice.toLocaleString()}원`,
    },
  ];

  if (price < recommendedMinPrice) {
    marks.unshift({
      value: price,
      label: `${price.toLocaleString()}원`,
    });
  }

  if (price > recommendedMaxPrice) {
    marks.push({
      value: price,
      label: `${price.toLocaleString()}원`,
    });
  }

  return (
    <div className={`recommended-price ${isOutOfRange ? 'out-of-range' : ''}`}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min} 
        max={max}  
        step={null}  
        marks={marks}
        className={`recommended-price ${isOutOfRange ? 'out-of-range' : ''}`}
        disabled
      />
      <div className="price-range">
        <span>{recommendedMinPrice.toLocaleString()}원</span>  
        <span>{recommendedMaxPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default SellRecommendedPrice;
