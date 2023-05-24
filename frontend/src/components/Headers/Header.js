import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <Link to="/" className="header-link">
          List
        </Link>
        <Link to="/entry" className="header-link">
          Entry
        </Link>
      </nav>
    </header>
  );
};

export default Header;
