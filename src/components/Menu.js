import React from 'react';
import { Link } from 'react-router-dom';
import ChatIcon from '../images/ChatIcon';
import SearchIcon from '../images/SearchIcon';
import ProfileIcon from '../images/ProfileIcon';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/chat" className="link">
        <span className="link-icon">
          <ChatIcon />
        </span>
        <span className="link-title">Chat</span>
      </Link>

      <Link to="/search" className="link">
        <span className="link-icon">
          <SearchIcon />
        </span>
        <span className="link-title">Search</span>
      </Link>

      <Link to="/profile" className="link">
        <span className="link-icon">
          <ProfileIcon />
        </span>
        <span className="link-title">Profile</span>
      </Link>
    </div>
  );
};

export default Menu;
