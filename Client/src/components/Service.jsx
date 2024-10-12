// src/Services.js
import React from 'react';
import '../css/service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookReader, faUserFriends, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

const Service = () => {
  
    return (
      <div className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <FontAwesomeIcon icon={faBook} size="2x" />
            <h3>Online Book Sales</h3>
            <p>Browse and purchase books from our extensive online catalog.</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faBookReader} size="3x" />
            <h3>Book Rentals</h3>
            <p>Rent books for a specified period at affordable rates.</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
            <h3>Book Recommendations</h3>
            <p>Get personalized book recommendations based on your reading history.</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faUserFriends} size="3x" />
            <h3>Community Events</h3>
            <p>Join our community events, including book readings and author signings.</p>
          </div>
        </div>
        <Testimonials />
        <ContactForm />
      </div>
    );
  };
  
  const Testimonials = () => {
    return (
      <div className="testimonials">
        <h2>-What Our Customers Say-</h2>
        <div className="testimonial-item">
          <p>"Great selection of books and excellent customer service!"</p>
          <h4>- Jane Doe</h4>
        </div>
        <div className="testimonial-item">
          <p>"I love the community events. They are well-organized and fun!"</p>
          <h4>- John Smith</h4>
        </div>
      </div>
    );

}
  

export default Service;
