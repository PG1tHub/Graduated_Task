// CategorySelector.js
import React from 'react';

const CategorySelector = ({ category, setCategory }) => {
  return (
    <div style={{ marginTop: '10px' }}>
      <div>카테고리</div>
      <select 
        value={category.major} 
        onChange={(e) => setCategory({ ...category, major: e.target.value, middle: '', minor: '' })} 
        required
      >
        <option value="">대분류 선택</option>
        <option value="휴대폰">휴대폰</option>
        <option value="태블릿">태블릿</option>
        <option value="노트북">노트북</option>
        <option value="게임">게임</option>
        <option value="웨어러블">웨어러블</option>
      </select>

      {category.major && (
        <select 
          value={category.middle} 
          onChange={(e) => setCategory({ ...category, middle: e.target.value, minor: '' })} 
          required
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
          {/* 다른 대분류에 따른 중분류 추가하기 (물어보기~)*/}
        </select>
      )}

      {category.middle && (
        <select 
          value={category.minor} 
          onChange={(e) => setCategory({ ...category, minor: e.target.value })} 
          required
        >
          <option value="">소분류 선택</option>
          {category.middle === "아이폰" && (
            <>
              <option value="아이폰SE">아이폰 SE</option>
              <option value="아이폰12">아이폰12</option>
            </>
          )}
          {category.middle === "갤럭시" && (
            <>
              <option value="갤럭시S8">갤럭시S8</option>
              <option value="Z플립">Z플립</option>
            </>
          )}
          {/* 다른 중분류에 따른 소분류 추가 가능 */}
        </select>
      )}
    </div>
  );
};

export default CategorySelector;
