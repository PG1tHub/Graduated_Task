import React, { useEffect, useState } from 'react';
// import axios from 'axios';
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
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts(sampleData);
  }, []);

  useEffect(() => {
    setProductsLatest(sampleDataLatest);
  }, []);

  // useEffect(() => {
  //   axios.get('http://43.202.46.29:8080/main')
  //   .then(response => {
  //     console.log('API호출 성공');
  //     console.log(response);  // 전체 응답 객체를 출력하여 데이터 구조와 상태를 확인합니다.
  //     console.log(response.data);  // 데이터 객체를 확인합니다
  //     if(response.data.resultCode === 200) {
  //       const popularItems = response.data.data.popularItems.map(item => ({
  //         itemId: item.itemId, // id -> itemId
  //         itemName: item.itemName, // title -> itemName
  //         price: item.price,
  //         image: item.image, // imageUrl -> image
  //         time: item.time, // createdAt -> time
  //         category: item.category?.categoryName,
  //         priceSimilar: item.priceSimilar, // isPriceSimilar -> priceSimilar
  //         itemState: item.itemState,
  //         minPrice: item.minPrice, // recommendedMinPrice -> minPrice
  //         maxPrice: item.maxPrice // recommendedMaxPrice -> maxPrice
  //       }));
        
  //       const recentItems = response.data.data.recentItems.map(item => ({
  //         itemId: item.itemId, // id -> itemId
  //         itemName: item.itemName, // title -> itemName
  //         price: item.price,
  //         image: item.image, // imageUrl -> image
  //         time: item.time, // createdAt -> time
  //         category: item.category,
  //         priceSimilar: item.priceSimilar, // isPriceSimilar -> priceSimilar
  //         itemState: item.itemState,
  //         minPrice: item.minPrice, // recommendedMinPrice -> minPrice
  //         maxPrice: item.maxPrice // recommendedMaxPrice -> maxPrice
  //       }));
  
  //       setProducts(popularItems);
  //       setProductsLatest(recentItems);
  //       setIsLoading(false);
  //     } else {
  //       console.error('Unexpected resultCode:', response.data.resultCode);
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Error fetching main page data:", error);
  //     setIsLoading(false);
  //   });

  // }, []);

  const handleLogoClick = () => {
    window.location.reload(); 
  };

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

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  const filteredProducts = (products || []).filter(product => {
    const matchesSearch = product.itemName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "전체" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const filteredProductsLatest = (productsLatest || []).filter(product => {
    const matchesSearch = product.itemName?.toLowerCase().includes(searchQuery.toLowerCase());
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
          <Link to={`/recommended-product/${product.itemId}`} key={`recommend-${product.itemId}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <div className="main-font">방금 등록된 상품</div>
      <div className="product-list">
        {filteredProductsLatest.map(product => (
          <Link to={`/latest-product/${product.itemId}`} key={`latest-${product.itemId}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
