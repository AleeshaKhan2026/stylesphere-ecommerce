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
  image: "https://img.freepik.com/free-photo/young-determined-armenian-curlyhaired-female-university-student-listen-carefully-asignment-look-confident-ready-task-cross-hands-chest-smiling-selfassured-standing-white-background_176420-56066.jpg?semt=ais_hybrid&w=740&q=80"
},

    {
      name: "Michael Chen",
      rating: 5,
      comment: "Great selection of men's clothing. The fit is perfect and shipping was fast. Their size guide is accurate and the material quality is top-notch.",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Love the exclusive offers! Got a great deal on a designer handbag. The packaging was beautiful and the product arrived in perfect condition.",
      role: "Fashion Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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