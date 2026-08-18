import React from 'react';
import './Reviews.css';

const ReviewCard = ({ name, rating, comment, image, role }) => {
  return (
    <div className="review-card">
      <div className="reviewer-image">
        <img src={image} alt={name} />
      </div>
      <div className="review-content">
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <i key={index} className={`fas fa-star ${index < rating ? 'filled' : ''}`}></i>
          ))}
        </div>
        <p className="review-comment">"{comment}"</p>
        <h4 className="reviewer-name">{name}</h4>
        <p className="reviewer-role">{role}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
{
  name: "Sarah Johnson",
  rating: 5,
  comment: "Amazing quality! The dress I bought exceeded my expectations. Will definitely shop again! The shipping was fast and customer service was excellent.",
  role: "Fashion Blogger",
  image: "/images/review1.jpg"
},

    {
      name: "Michael Chen",
      rating: 5,
      comment: "Great selection of men's clothing. The fit is perfect and shipping was fast. Their size guide is accurate and the material quality is top-notch.",
      role: "Regular Customer",
      image: "/images/review2.jpg"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Love the exclusive offers! Got a great deal on a designer handbag. The packaging was beautiful and the product arrived in perfect condition.",
      role: "Fashion Enthusiast",
      image: "/images/review3.jpg"
    }
  ];

  return (
    <section id="reviews" className="reviews">
      <h2 className="section-title">What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;