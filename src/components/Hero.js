import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">new collections</span>
          <h1 className="hero-title">for everyone</h1>
          <p className="hero-description">Discover the latest trends in fashion with our exclusive collection. Quality meets style at affordable prices.</p>
          <div className="hero-buttons">
            <button className="btn hero-btn">Shop Now</button>
            <button className="btn hero-btn-secondary">View Collections</button>
          </div>
        </div>
        <div className="hero-image">
         <img src="/images/hero.jpg" alt="Shopper fashion collection" />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;