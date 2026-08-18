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
      image: "/images/women.jpg",
      itemCount: 245
    },
    {
      title: "TRENDING IN MEN",
      image: "/images/men.jpg",
      itemCount: 189
    },
    {
    title: "KIDS COLLECTION",
    image: "/images/kids.jpg",
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