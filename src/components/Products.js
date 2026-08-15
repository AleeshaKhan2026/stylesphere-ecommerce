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
  image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  name: "Casual Denim Jacket",
  price: 89.99,
  originalPrice: 129.99,
  discount: 30
},
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Summer Floral Dress",
      price: 59.99,
      originalPrice: 89.99,
      discount: 33
    },
 {
  image: "https://afraz.pk/cdn/shop/files/image_fx_white_t_shirt_is_handing_on_wooden_hanger_eac_46290276122936.jpg?v=1768685258&width=1946",
  name: "Classic White T-Shirt",
  price: 24.99,
  originalPrice: 39.99,
  discount: 37
},   
    {
  image: "https://img.drz.lazcdn.com/static/pk/p/a4f37425495eebcdc74b39888218b085.jpg_960x960q80.jpg_.webp",
  name: "Slim Fit Jeans",
  price: 69.99,
  originalPrice: 99.99,
  discount: 30
},  
    {
  image: "https://wwd.com/wp-content/uploads/2023/03/designer-handbag-lead-art.jpg?w=911&h=510&crop=1",
  name: "Leather Handbag",
  price: 129.99,
  originalPrice: 199.99,
  discount: 35
},
    {
  image: "https://www.exportleftovers.com/cdn/shop/files/vsd_10cbe97b-2863-4695-ad69-66f668ef0327.jpg?crop=center&height=1273&v=1767355353&width=850",
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