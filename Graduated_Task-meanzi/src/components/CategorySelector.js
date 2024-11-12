// CategorySelector.js
import React from 'react';
import './CategorySelector.css'; // CSS 파일 임포트

const CategorySelector = ({ category, setCategory }) => {
  return (
    <div className="category-title">카테고리
      <div className="category-container">
      {/* 대분류 선택 */}
        <div className="category-box">
        <select 
          value={category.major} 
          onChange={(e) => setCategory({ ...category, major: e.target.value, middle: '', minor: '' })} 
          required
          className="category-select"
        >
          <option value="">카테고리 선택</option>
          {/* <option value="휴대폰">휴대폰</option> */}
          <option value="휴대폰">휴대폰</option>
          <option value="태블릿">태블릿</option>
          <option value="노트북">노트북</option>
          <option value="게임">게임</option>
          <option value="웨어러블">웨어러블</option>
        </select>
      </div>


      <div className="category-box">
        <div> </div>
        {category.major && (
          <select 
            value={category.middle} 
            onChange={(e) => setCategory({ ...category, middle: e.target.value, minor: '' })} 
            required
            className="category-select"
          >
            <option value="">중분류 선택</option>
            {category.major === "휴대폰" && (
              <>
                <option value="아이폰">아이폰</option>
                <option value="갤럭시">갤럭시</option>
              </>
            )}
            {category.major === "태블릿" && (
              <>
                <option value="아이패드">아이패드</option>
                <option value="갤럭시탭">갤럭시탭</option>
              </>
            )}
            {category.major === "웨어러블" && (
              <>
                <option value="에어팟">에어팟</option>
                <option value="버즈">버즈</option>
              </>
            )}
            {/* 다른 대분류에 따른 중분류 추가 */}
          </select>
        )}
      </div>

      {/* 소분류 선택 */}
      <div className="category-box">
        <div> </div>
        {category.middle && (
          <select 
            value={category.minor} 
            onChange={(e) => setCategory({ ...category, minor: e.target.value })} 
            required
            className="category-select"
          >
            <option value="">소분류 선택</option>
            {category.middle === "아이폰" && (
              <>
                <option value="아이폰SE">아이폰SE</option>
                <option value="Iphone 15 pro 256gb">아이폰15</option>
              </>
            )}
            {category.middle === "갤럭시" && (
              <>
                <option value="갤럭시S10">갤럭시S10</option>
                <option value="Z플립">Z플립</option>
              </>
            )}
            {category.middle === "에어팟" && (
              <>
                <option value="에어팟1">에어팟1</option>
                <option value="에어팟2">에어팟2</option>
                <option value="에어팟3">에어팟3</option>
                <option value="에어팟 프로">에어팟 프로</option>
                <option value="AirPods Pro 2">에어팟 프로2</option>
                <option value="AirPods Max">에어팟 맥스</option>
              </>
            )}
            {/* 다른 중분류에 따른 소분류 추가 */}
          </select>
        )}
      </div>
    </div>
    </div>
  );
};

export default CategorySelector;
