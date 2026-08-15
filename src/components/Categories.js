import React from 'react';
import './Categories.css';

const CategoryCard = ({ title, image, itemCount }) => (
  <div className="category-card">
    <img src={image} alt={title} />
    <div className="category-overlay">
      <h3>{title}</h3>
      <p>{itemCount}+ Items</p>
      <button className="btn category-btn">Shop Now</button>
    </div>
  </div>
);

const Categories = () => {
  const categories = [
    {
      title: "POPULAR IN WOMEN",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      itemCount: 245
    },
    {
      title: "TRENDING IN MEN",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      itemCount: 189
    },
    {
    title: "KIDS COLLECTION",
    // آپ کی نئی image
    image: "https://breakout.com.pk/cdn/shop/files/SAB04055.jpg?v=1741074902&width=1584",
    itemCount: 156
  }
  ];

  return (
    <section id="categories" className="categories">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;