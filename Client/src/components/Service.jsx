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
<<<<<<< HEAD
            <FontAwesomeIcon icon={faBook} size="2x" />
            <h3>Online Book Sales</h3>
            <p>Browse and purchase books from our extensive online catalog.</p>
=======
            <FontAwesomeIcon icon={faBook} size="3x" />
            <h3>Writing Assistance</h3>
            <p>Guidance on structuring academic papers, writing essays, or preparing research proposals. This may include templates, guides, or tips</p>
>>>>>>> 7d6cb734cf7dbd1d0488b47342db36b51c367600
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faBookReader} size="3x" />
            <h3>Research Assistance</h3>
            <p> Students can request help with finding academic sources, databases, or research papers relevant to their study topics. This can include curated resources or links to external academic libraries</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faUserCircle} size="3x" />
            <h3>Book Recommendations</h3>
            <p>Get personalized book recommendations based on your reading history.</p>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faUserFriends} size="3x" />
            <h3>Research Guidance</h3>
            <p> A step-by-step guide on how to conduct research, with links to databases or reference book downloads.</p>
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
