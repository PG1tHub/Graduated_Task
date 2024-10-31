import React from 'react';
import { Link } from 'react-router-dom';
import SellIcon from '../images/SellIcon';
import SearchIcon from '../images/SearchIcon';
import ProfileIcon from '../images/ProfileIcon';
import './Menu.css';

const Menu = ({ isLoggedIn }) => {
  return (
    <div className="menu">
      <Link to="/item" className="link">
        <span className="link-icon">
          <SellIcon />
        </span>
        <span className="link-title">Sell</span>
      </Link>

      <Link to="/search" className="link">
        <span className="link-icon">
          <SearchIcon />
        </span>
        <span className="link-title">Search</span>
      </Link>

      {/* <Link to="/userInfo" className="link"> */}
      <span className='link' onClick={() => {
        if(isLoggedIn){
          window.location.href = '/userInfo';
        } else {
          window.location.href = '/login';
        }
      }}> 
        <span className="link-icon">
          <ProfileIcon />
        </span>
        <span className="link-title">Profile</span>
      {/* </Link> */}
      </span> 
    </div>
  );
};

export default Menu;
