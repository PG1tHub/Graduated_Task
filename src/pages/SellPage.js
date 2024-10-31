import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sampleData from '../dummy'; 
// import sampleDataLatest from '../dummy_latest';
import Menu from '../components/Menu';
import Logo from '../images/logo.png';
import RecommendedPrice from '../components/RecommendedPrice';
import CategorySelector from '../components/CategorySelector';
import './SellPage.css';

const SellPage = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState({
    major: '',
    middle: '',
    minor: ''
  });
  const [productCondition, setProductCondition] = useState('새 상품');
  const [currentPrice, setCurrentPrice] = useState(''); 
  const [priceWarning, setPriceWarning] = useState(''); 
  const [recommendedPrice, setRecommendedPrice] = useState({ min: 0, max: 0 });

  const getItemStateValue = (condition) => {
    switch (condition) {
      case '새 상품' :
        return 1;
      case '사용감 적음' :
        return 2;
      case '사용감 많음' :
        return 3;
      case '중고' :
        return 4;
      case '고장/파손' :
        return 5;
      default:
        return 0;
    }
  }

  const updateRecommendedPrice = () => {
    const itemStateValue = getItemStateValue(productCondition);
    console.log('item state value: ', itemStateValue);

    const foundProduct = sampleData.find(item => 
      item.category === category.major && 
      item.itemState === getItemStateValue(productCondition)
    );
    console.log('Found Product : ', foundProduct);

    if (foundProduct) {
      const newRecommendedPrice = {
        min: foundProduct.recommendedMinPrice,
        max: foundProduct.recommendedMaxPrice,
      };
      setRecommendedPrice(newRecommendedPrice);
      setPriceWarning(''); 
    } else {
      setRecommendedPrice({ min: 0, max: 0 });
      setPriceWarning('추천 가격 정보 없음');
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    updateRecommendedPrice(); 
  };

  const handleConditionChange = (e) => {
    setProductCondition(e.target.value);
  }

  useEffect(() => {
    updateRecommendedPrice();
  }, [productCondition, category]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };


  const handlePriceChange = (e) => {
    const value = e.target.value;
    setCurrentPrice(value);

    if (value < recommendedPrice.min || value > recommendedPrice.max) {
      setPriceWarning('가격 추천 범위 밖입니다.');
    } else {
      setPriceWarning('');
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('productName', productName);
    formData.append('category', category);
    formData.append('productCondition', productCondition);
    formData.append('currentPrice', currentPrice);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  return (
    <div className="Sell">
      <header className="Sell-header">
        <Link to="/">
          <img src={Logo} alt="로고" className="logo" />
        </Link>
        <Menu />
      </header>
    
      <div className="Write">
        <form onSubmit={handleSubmit}>
          상품이미지
          <input
            type="file"
            accept='image/*'
            onChange={handleImageChange}
          />
          {image && (
            <div className='image-preview'>
              <img src={image} alt="미리보기" />
            </div>
          )}

          <div className="productName">상품명</div>
          <input
            type="text"
            id="productName"
            value={productName}
            placeholder="상품명을 입력하세요"
            required 
            onChange={(e) => setProductName(e.target.value)}
          />
          <CategorySelector category={category} setCategory={handleCategoryChange} />
          <div className='productState'>상품상태</div>
            <label>
              <input 
                type="radio" 
                value="새 상품" 
                checked={productCondition === '새 상품'}
                onChange={handleConditionChange} 
              />
              새 상품 
            </label>
            <label>
              <input 
                type="radio" 
                value="사용감 적음" 
                checked={productCondition === '사용감 적음'}
                onChange={handleConditionChange}  
              />
              사용감 적음
            </label>
            <label>
              <input 
                type="radio" 
                value="사용감 많음" 
                checked={productCondition === '사용감 많음'} 
                onChange={handleConditionChange}
              />
              사용감 많음
            </label>
            <label>
              <input 
                type="radio" 
                value="중고" 
                checked={productCondition === '중고'}
                onChange={handleConditionChange}  
              />
              중고
            </label>
            <label>
              <input 
                type="radio" 
                value="고장/파손" 
                checked={productCondition === '고장/파손'} 
                onChange={handleConditionChange}
              />
              고장/파손
            </label>

          <RecommendedPrice 
            minPrice={recommendedPrice.min} 
            maxPrice={recommendedPrice.max} 
            currentPrice={Number(currentPrice)}
          />
          <div className='productPrice'>가격</div>
          <input
            type="number"
            value={currentPrice}
            onChange={handlePriceChange}
            placeholder="가격을 입력하세요"
            style={{ marginTop: '5px', width: '100%' }}
            required
          />
          {priceWarning && (
            <div style={{ color: 'red' }}>{priceWarning}</div> 
          )}

          
          <div className='buttons'>
            <button className='temporary'>임시저장</button>
            <button type="submit">등록</button>   
          </div>
        </form>  
      </div>
    </div>
  );
};

export default SellPage;