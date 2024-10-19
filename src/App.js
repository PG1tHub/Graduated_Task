import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ProductPage from './pages/ProductPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
