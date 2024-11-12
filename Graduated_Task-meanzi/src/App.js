import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage'; 
import SellPage from './pages/SellPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/recommended-product/:id" element={<ProductPage />} />
        <Route path="/latest-product/:id" element={<ProductPage />} /> 
        <Route path="/item" element={<SellPage />} />
        <Route path="/userInfo" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
