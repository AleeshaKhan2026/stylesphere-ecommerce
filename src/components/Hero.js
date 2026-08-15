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
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fashion Collection" />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;