import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Menu from '../components/Menu';
import './Main.css';
import Logo from '../images/logo.png';
import sampleData from '../dummy';
import sampleDataLatest from '../dummy_latest';
import MainImage from '../images/main.png';
import ListImage from '../images/List.svg';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [productsLatest, setProductsLatest] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setProducts(sampleData);
  }, []);

  useEffect(() => {
    setProductsLatest(sampleDataLatest);
  }, []);

  const handleLogoClick = () => {
    window.location.reload(); 
  };

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

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleMyPageClick = () => {
  //   if(!isLoggedIn) {
  //     handleLogin();
  //   } else {
  //     console.log("마이페이지 이동");
  //   }
  // }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "전체" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const filteredProductsLatest = productsLatest.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "전체" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={Logo} alt="로고" className="logo" onClick={handleLogoClick} />
        </Link>
        <Menu /> 
      </header>
      <div 
        className="category-dropdown" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={closeDropdown}
      >
        <button className="category-button">
          <img src={ListImage} alt="카테고리" className="categoryIcon" /> {category}
        </button>
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
      <div className="main-image">
        <img src={MainImage} alt="메인 이미지" className="main-img" />
      </div>

      <div className="main-font">실시간 추천 아이템 !</div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <div className="main-font">방금 등록된 상품</div>
      <div className="product-list">
        {filteredProductsLatest.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
      ))}
      </div>
    </div>
  );
};

export default Main;
