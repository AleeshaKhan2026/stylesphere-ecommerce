import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <h3>Exclusive Offers For You</h3>
          <p>Welcome to SHOPPER, your premier destination for fashion and lifestyle products. We believe that everyone deserves to look and feel their best, which is why we curate the finest collections from around the world.</p>
          <p>Our journey began in 2020 with a simple mission: to make high-quality fashion accessible to everyone. Today, we're proud to serve millions of happy customers across the globe with our carefully selected products and exceptional customer service.</p>
          <div className="features">
            <div className="feature">
              <i className="fas fa-truck"></i>
              <h4>Free Shipping</h4>
              <p>On orders over $50</p>
            </div>
            <div className="feature">
              <i className="fas fa-undo"></i>
              <h4>Easy Returns</h4>
              <p>30-day return policy</p>
            </div>
            <div className="feature">
              <i className="fas fa-lock"></i>
              <h4>Secure Payment</h4>
              <p>100% secure transactions</p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h4>24/7 Support</h4>
              <p>Dedicated customer service</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          {<img 
  src="https://www.apparelentrepreneurship.com/wp-content/uploads/2019/04/apparel_entrepreneurship_what_your_clothing_brand_needs_to_stay_relevant_2019.jpg" 
  alt="About Us" 
/>
 }
          <div className="about-stats">
            <div className="stat">
              <h4>50K+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h4>10K+</h4>
              <p>Products</p>
            </div>
            <div className="stat">
              <h4>100+</h4>
              <p>Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;