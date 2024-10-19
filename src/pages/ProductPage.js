import React from 'react';
import { useParams, Link } from 'react-router-dom';
import sampleData from '../dummy'; 
import './ProductPage.css'; 
import Menu from '../components/Menu';
import RecommendedPrice from '../components/RecommendedPrice';
import Logo from '../images/logo.png';
import MoonImg from '../images/moon.png';
import ChatImage from '../images/Chat.svg';
import ListImage from '../images/List.svg';
import WishImage from '../images/Wish.svg';
import { useState } from 'react';
import sampleDataLatest from '../dummy_latest';

const ProductPage = () => {
  const { id } = useParams(); 
  const product = sampleData.find(item => item.id === parseInt(id)) || sampleDataLatest.find(item => item.id === parseInt(id)); 
  // const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  const handleCategoryChange = (e) => {
    setCategory(e.target.innerText);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const stateDescriptions = {
    1: "새 상품",
    2: "사용감 적음",
    3: "사용감 많음",
    4: "중고",
    5: "고장/파손"
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleMyPageClick = () => {
  //   if (!isLoggedIn) {
  //     handleLogin();
  //   } else {
  //     console.log("마이페이지 이동");
  //   }
  // };



  return (
    <div className="product-page">
      <header className="App-header">
        <Link to="/">
          <img src={Logo} alt="로고" className="logo" onClick={() => window.location.reload()} />
        </Link>
        <Menu /> 
      </header>
      <div 
        className="category-dropdown" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={closeDropdown}
      >
        <div className="category-button">
          <img src={ListImage} alt="카테고리" className="categoryIcon"/>
          <span class="category-text">카테고리 {category}</span>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li value="phones" onClick={handleCategoryChange}>휴대폰</li>
            <li value="tablets" onClick={handleCategoryChange}>태블릿</li>
            <li value="notebooks" onClick={handleCategoryChange}>노트북</li>
            <li value="games" onClick={handleCategoryChange}>게임</li>
            <li value="wareables" onClick={handleCategoryChange}>웨어러블</li>
          </ul>
        )}
      </div>
      <hr className="divider" />

      <div className="product-details">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.title} />
        </div>
        <div className="product-info">
          <div className="product-category">
            <div className="category-name">{product.category || '일반'}</div>
            <div className="product-title">
              {product.title} {product.isPriceSimilar ? <img src={MoonImg} alt="웃음" className="emoty"/> : ""}

            </div>
          </div>
          <div className="product-string">
            <strong className="product-price">{product.price.toLocaleString()} 원</strong>
          </div>
          <div className="product-state"> 상태 : {stateDescriptions[product.itemState]} </div> 
          <RecommendedPrice 
            minPrice={product.recommendedMinPrice} 
            maxPrice={product.recommendedMaxPrice} 
            currentPrice={product.price}
          />
          {/* <p className="trust">판매자 신뢰도</p> */}
          <div className="button-row">
            <img src={WishImage} alt="찜" className="wish-button" />
            <img src={ChatImage} alt="채팅" className="chatting-button" />
            <button className="deal-button">거래하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
