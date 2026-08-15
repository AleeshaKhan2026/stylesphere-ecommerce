import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>SHOPPER</h1>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#categories" onClick={() => setIsOpen(false)}>Categories</a></li>
            <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
        
        <div className="nav-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;