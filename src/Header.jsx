import React from 'react';
import './Header.css';
import { FaUserCircle, FaBars, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="/photo/1.jpg"
          alt="Airbnb Logo"
        />
      </div>
      <div className="header__center">
        <button type='buton'>Stays</button>
        <button type='button'>Experiences</button>
      </div>
      <div className="header__right">
        <a href="#host">Airbnb your home</a>
        <FaGlobe />
        <div className="header__menu">
          <FaBars />
          <FaUserCircle />
        </div>
      </div>
    </header>
    
  );
};

export default Header;
