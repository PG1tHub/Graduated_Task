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
      style: { backgroundColor: 'blue', width: 15, height: 15, borderRadius: '50%' },
    },
    {
      value: currentPrice,
      label: `${currentPrice.toLocaleString()}원`,
      style: {
        backgroundColor: isOutofRange ? 'red' : 'blue',
        width: 15,
        height: 15,
        borderRadius: '50%',
      },
    },
    {
      value: maxPrice,
      style: { backgroundColor: 'blue', width: 15, height: 15, borderRadius: '50%' },
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
        step={null}  
        marks={[
          {
            value: currentPrice,
            label: `${currentPrice.toLocaleString()}원`,
            'data-value': {currentPrice},  
          },
        ]}
        disabled
        sx={{
          '& .MuiSlider-mark': {
            width: 15,
            height: 15,
            borderRadius: '50%',
            backgroundColor: '#8cbfe8', 
          },
          '& .MuiSlider-mark[data-value={currentPrice}]': {
            backgroundColor: isOutofRange ? 'red' : 'blue', 
          },
        }}
      />
      <div className="price-range">
        <span>{value[0].toLocaleString()}원</span>  
        <span>{value[1].toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default RecommendedPrice;
