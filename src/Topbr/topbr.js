import React, { useState } from 'react';
import './Topbr.css';


const Topbr = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Bottom navigation bar */}
      <div className="bottom-nav">
        <div className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="nav-item">
          <i className="fas fa-home"></i>
        </div>
        <div className="nav-item">
          <i className="fas fa-shopping-cart"></i>
          <div className="cart-badge">0</div>
        </div>
        <div className="nav-item">
          <i className="fas fa-user"></i>
        </div>
      </div>

      {/* Sidebar menu */}
      {menuVisible && (
        <div className="side-menu">
          <div className="side-menu-header">
            <h2>KACHA BAZAR</h2>
            <button onClick={toggleMenu} className="close-button">X</button>
          </div>
          <ul className="menu-list">
            <li className="categories-item">All Categories</li>
            <li><img src='im11.webp' className='image'></img>Breakss<i class='fas fa-chevron-right'></i></li>
            <li><img src='im10.webp' className='image'></img>Drinkss<i class='fas fa-chevron-right'></i></li>
            <li><img src='im2.webp' className='image'></img> Drinks<i class='fas fa-chevron-right'></i></li>
            <li><img src='im4.webp' className='image'></img>Cakess<i class='fas fa-chevron-right'></i></li>
            <li><img src='im9.webp' className='image'></img>Daiary <i class='fas fa-chevron-right'></i></li>
           
          </ul>
          <ul className="menu-list">
  <li className="categories-item">Pages</li>
  <li><i className="fas fa-gift"></i> Offer Pages</li>
  <li><i className="fas fa-shopping-bag"></i> Checkout Page</li>
  <li><i className="fas fa-question-circle"></i> Faq Page</li>
  <li><i className="fas fa-users"></i> About Us Page</li>
  <li><i className="fas fa-phone-alt"></i> Contact Us Page</li>
  <li><i className="fas fa-shield-alt"></i> Privacy Policy Page</li>
  <li><i className="fas fa-file-contract"></i> Terms and Conditions Page</li>
  <li><i className="fas fa-exclamation-circle"></i> Not Found Page</li>
</ul>
        </div>
      )}
    </>
  );
};

export default Topbr;
