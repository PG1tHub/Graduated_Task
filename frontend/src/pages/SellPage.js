import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Logo from '../images/logo.png';
import RecommendedPrice from '../components/SellRecommendedPrice';
import CategorySelector from '../components/CategorySelector';
import './SellPage.css';
import Images from '../components/Images';

const SellPage = () => {
  const [images, setImages] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState({
    major: '',
    middle: '',
    minor: ''
  });
  const [itemState, setItemState] = useState('새 상품');
  const [price, setPrice] = useState(0); 
  const [priceSimilar, setPriceSimilar] = useState(false);
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

  const updateRecommendedPrice = async () => {
    const itemStateValue = getItemStateValue(itemState);
    // console.log('item state value: ', itemStateValue);
    console.log('Category Minor:', category ? category.minor : 'category가 없음');
    console.log('Item State Value:', itemStateValue ? itemStateValue : 'itemState가 없음');
  
    try {
      const response = await fetch(`http://ec2-3-38-191-115.ap-northeast-2.compute.amazonaws.com:8080/recommended-price`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          category: category.minor,
          itemState: itemStateValue,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Recommended Price Data:', data);
      console.log(data.state);
      if (data.resultCode === 200 && data.data) {
        const newRecommendedPrice = {
          min: data.data.recommendedMinPrice,
          max: data.data.recommendedMaxPrice,
        };
        setRecommendedPrice(newRecommendedPrice);
        setPriceWarning('');
      } else {
        setRecommendedPrice({ min: 0, max: 0 });
        setPriceWarning('추천 가격 정보 없음');
      }
    } catch (error) {
      console.error('Error fetching recommended price:', error);
      setRecommendedPrice({ min: 0, max: 0 });
      setPriceWarning('추천 가격 정보를 가져오는 데 실패했습니다.');
    }
  };
  

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    updateRecommendedPrice(); 
  };

  const handleConditionChange = (e) => {
    setItemState(e.target.value);
  }

  useEffect(() => {
    updateRecommendedPrice();
  }, [itemState, category]);

  useEffect(() => {
    setItemName('');
  }, []);

  useEffect(() => {
    // 데이터 fetching 예시
    const fetchData = async () => {
      const response = await fetch('API_URL');
      const data = await response.json();
      
      // 상태 업데이트
      setRecommendedPrice({
        min: data.recommendedMinPrice,
        max: data.recommendedMaxPrice
      });
    };
  
    fetchData();
  }, []); // 빈 배열을 넣으면 컴포넌트가 마운트될 때만 실행됩니다.

  useEffect(() => {
    // price가 recommendedPrice의 min과 max 범위 안에 있는지 확인
    if (price >= recommendedPrice.min && price <= recommendedPrice.max) {
      setPriceSimilar(true);
    } else {
      setPriceSimilar(false);
    }
  }, [price, recommendedPrice]); // price와 recommendedPrice가 변경될 때마다 실행

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(reader.result);
        setImageFile(localStorage.length.toString());
        localStorage.setItem(localStorage.length.toString(),reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImages(null);
    setImageFile(null);
  }


  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);

    if (value < recommendedPrice.min || value > recommendedPrice.max) {
      setPriceWarning('가격 추천 범위 밖입니다.');
    } else {
      setPriceWarning('');
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const token = sessionStorage.getItem('Authorization');
    const requestData = {
      // images: images,
      itemName: itemName,
      price: price,
      itemState: getItemStateValue(itemState),
      priceSimilar: priceSimilar
    };

    // category가 null이나 default가 아닌 경우에만 추가
    if (category && category.minor && category.minor !== 'default') {
      requestData.category = category.minor;
    }

    try {
      const response = await fetch('http://ec2-54-180-1-150.ap-northeast-2.compute.amazonaws.com:8080/item/create', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });

      if(!response.ok){
        throw new Error('Network response was not ok'+response.status);
      }

      const result = await response.json();
      console.log(result);

      const CategoryImage = Images[category.minor];
      setImages(CategoryImage);

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  return (
    <div className="Sell">
      <header className="Sell-header">
        <divnk to="/">
          <img src={Logo} alt="로고" className="logo" />
        </divnk>
        <Menu />
      </header>
    
      <div className="Write">
        <form onSubmit={handleSubmit}>
        {/* <form> */}
          <label className="image-upload">
            {images ? (
              <div className="image-preview-container">
                <img src={images} alt="미리보기" className="image-preview" />
                <button type="button" className="remove-button" onCdivck={handleImageRemove}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-1-13h2v6h-2V7Zm0 8h2v2h-2v-2Z" />
                  </svg>
                </button>
              </div>
            ) : (
              <span>상품 이미지를 클릭하거나 드래그하여 업로드하세요.</span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </label>

          <div className="productName">상품명</div>
          <input
            type="text"
            id="itemName"
            className="itemName"
            value={itemName}
            placeholder="상품명을 입력하세요"
            required 
            onChange={(e) => setItemName(e.target.value)}
            autoComplete='off'
          />
          <CategorySelector category={category} setCategory={handleCategoryChange} />
          <div className='productState'>상품상태</div>
          <div>
            <div className='radio-group'>
              <input 
                type="radio" 
                value="새 상품" 
                checked={itemState === '새 상품'}
                onChange={handleConditionChange} 
                id='new'
              />
              <label htmlFor='new'>새 상품</label>
            </div>
        
            <div className='radio-group'>
              <input 
                type="radio" 
                value="사용감 적음" 
                checked={itemState === '사용감 적음'}
                onChange={handleConditionChange} 
                id='light-used' 
              />
              <label htmlFor='light-used'>사용감 적음</label>
            </div>

            <div className='radio-group'>
              <input 
                type="radio" 
                value="사용감 많음" 
                checked={itemState === '사용감 많음'} 
                onChange={handleConditionChange}
                id='heavy-used'
              />
              <label htmlFor='heavy-used'>사용감 많음</label>
            </div>
          
            <div className='radio-group'>
              <input 
                type="radio" 
                value="중고" 
                checked={itemState === '중고'}
                onChange={handleConditionChange} 
                id='used' 
              />
              <label htmlFor='used'>중고</label>
            </div>
            
            <div className='radio-group'>
              <input 
                type="radio" 
                value="고장/파손" 
                checked={itemState === '고장/파손'} 
                onChange={handleConditionChange}
                id='broken'
              />
              <label htmlFor='broken'>고장/파손</label>
            </div>
          </div>

          <RecommendedPrice 
            recommendedMinPrice={recommendedPrice.min} 
            recommendedMaxPrice={recommendedPrice.max} 
            price={Number(price)}
            className='graph'
          />
          <div className='productPrice'>가격</div>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            className='price'
            placeholder="가격을 입력하세요"
            style={{ marginTop: '5px', width: '100%' }}
            required
          />
          {priceWarning && (
            <div style={{ color: 'red' }}>{priceWarning}</div> 
          )}
          {/* <div className='buttons'>저장</div> */}
          <Link to='/'>
            <button type="submit" className='buttonSubmit'>등록</button>   
          </Link>
        </form>  
      </div>
    </div>
  );
};

export default SellPage;