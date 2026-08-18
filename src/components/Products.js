import React from 'react';
import './Products.css';

const ProductCard = ({ image, name, price, originalPrice, discount }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={name} />
      {discount && <span className="discount-badge">{discount}% OFF</span>}
      <div className="product-actions">
        <button className="action-btn"><i className="fas fa-heart"></i></button>
        <button className="action-btn"><i className="fas fa-eye"></i></button>
      </div>
    </div>
    <div className="product-info">
      <h3>{name}</h3>
      <div className="product-price">
        <span className="current-price">${price}</span>
        {originalPrice && <span className="original-price">${originalPrice}</span>}
      </div>
      <button className="btn add-to-cart">Add to Cart</button>
    </div>
  </div>
);

const Products = () => {
  const products = [
    {
  image: "/images/denimjacket.jpg",
  name: "Casual Denim Jacket",
  price: 89.99,
  originalPrice: 129.99,
  discount: 30
},
    {
      image: "/images/summerfloral.jpg",
      name: "Summer Floral Dress",
      price: 59.99,
      originalPrice: 89.99,
      discount: 33
    },
 {
  image: "/images/t-shirt.jpg",
  name: "Classic White T-Shirt",
  price: 24.99,
  originalPrice: 39.99,
  discount: 37
},   
    {
  image: "/images/jeans.jpg",
  name: "Slim Fit Jeans",
  price: 69.99,
  originalPrice: 99.99,
  discount: 30
},  
    {
  image: "/images/handbag.jpg",
  name: "Leather Handbag",
  price: 129.99,
  originalPrice: 199.99,
  discount: 35
},
    {
  image: "/images/sneakers.jpg",
  name: "Premium Sneakers",
  price: 149.99,
  originalPrice: 219.99,
  discount: 32
}
  ];

  return (
    <section id="products" className="products">
      <h2 className="section-title">RELATED PRODUCTS</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;