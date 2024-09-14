import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-top">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#news">Latest News</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Latest News</h4>
        <ul>
          <li><a href="#fish">Fish & Meat</a></li>
          <li><a href="#drink">Soft Drink</a></li>
          <li><a href="#milk">Milk & Dairy</a></li>
          <li><a href="#beauty">Beauty & Health</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>My Account</h4>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#orders">My Orders</a></li>
          <li><a href="#recent">Recent Orders</a></li>
          <li><a href="#profile">Update Profile</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <img src="/logo2.svg" alt="Kacha Bazar Logo" className="footer-logo" />
        <p className='para'>987 Andre Plain Suite High Street 838, Lake Hestertown, USA</p>
        <p>Tel: 02.356.1666</p>
        <p>Email: <a href="mailto:ccruidk@test.com" className="email-link">ccruidk@test.com</a></p>
      </div>
    </div>
  );
}

export default Footer;
