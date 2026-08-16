// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>SHOPPER</h3>
//           <p>Your premier destination for fashion and lifestyle products. Quality meets style at affordable prices.</p>
//           <div className="footer-social">
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-pinterest"></i></a>
//           </div>
//         </div>
        
//         <div className="footer-section">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#categories">Categories</a></li>
//             <li><a href="#products">Products</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
        
//         <div className="footer-section">
//           <h4>Categories</h4>
//           <ul>
//             <li><a href="#">Women's Fashion</a></li>
//             <li><a href="#">Men's Fashion</a></li>
//             <li><a href="#">Kids Collection</a></li>
//             <li><a href="#">Accessories</a></li>
//             <li><a href="#">Footwear</a></li>
//           </ul>
//         </div>
        
//         <div className="footer-section">
//           <h4>Customer Service</h4>
//           <ul>
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Shipping Policy</a></li>
//             <li><a href="#">Returns & Exchanges</a></li>
//             <li><a href="#">Terms & Conditions</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//           </ul>
//         </div>
        
//         <div className="footer-section">
//           <h4>Newsletter</h4>
//           <p>Subscribe to get special offers and updates</p>
//           <form className="newsletter-form">
//             <input type="email" placeholder="Your email" />
//             <button type="submit"><i className="fas fa-paper-plane"></i></button>
//           </form>
//           <div className="payment-methods">
//             <i className="fab fa-cc-visa"></i>
//             <i className="fab fa-cc-mastercard"></i>
//             <i className="fab fa-cc-amex"></i>
//             <i className="fab fa-cc-paypal"></i>
//           </div>
//         </div>
//       </div>
      
//       <div className="footer-bottom">
//         <div className="footer-bottom-content">
//           <p>&copy; 2026 SHOPPER. All rights reserved.</p>
//           <div className="footer-links">
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Use</a>
//             <a href="#">Sitemap</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>SHOPPER</h3>
          <p>
            Your premier destination for fashion and lifestyle products.
            Quality meets style at affordable prices.
          </p>

          <div className="footer-social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#women">Women's Fashion</a></li>
            <li><a href="#men">Men's Fashion</a></li>
            <li><a href="#kids">Kids Collection</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#footwear">Footwear</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
            <li><a href="#returns">Returns & Exchanges</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get special offers and updates</p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Your email"
            />
            <button type="submit" aria-label="Subscribe">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>

          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2026 SHOPPER. All rights reserved.</p>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;