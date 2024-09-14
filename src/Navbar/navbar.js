
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar-bar">
      <div className="ayesha">
        <p>
          <i className="fas fa-phone"></i> We are available 24/7, Need help?
          <span> +099949343 </span>
        </p>
      </div>
      <div className="api">
         <a href="#">Account</a> |
        <Link to="/contact">Contact Us</Link> |
        <Link to="/about">About Us</Link> |
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;

