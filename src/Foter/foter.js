import React from 'react';
import './Foter.css';

const Foter = () => {
  return (

      <><div className="footer-container">
          <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-whatsapp"></i></a>
              </div>
          </div>
          <div className="contact-info">
              <h4>Call Us Today!</h4>
              <p className="phone-number">+6599887766</p>
          </div>
          <div className="payment-options">
              <img src="/payment.webp" alt="PayPal" />

          </div>
      </div><div className="footer-bottom">
              <p>Copyright 2024 @ <a href="your_link_here">HtmlLover</a>, All rights reserved.</p>
          </div></>
    
  );
};

export default Foter;
