import React, { useState, useEffect } from 'react';
import './Lastbar.css';

const Lastbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [lastbarPosition, setLastbarPosition] = useState(110);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setLastbarPosition(70);
    } else {
      setLastbarPosition(110);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="lastbar-container" style={{ top: `${lastbarPosition}px` }}>
      <ul className="lastbar-menu left-menu">
        <li 
          className="lastbar-item"
          onMouseEnter={() => setIsCategoryOpen(true)}
          onMouseLeave={() => setIsCategoryOpen(false)}
        >
          Categories <i className='fas fa-angle-down'></i>
          {isCategoryOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><img src='im11.webp' className='image' alt='Breakss' />Breakss<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im10.webp' className='image' alt='Drinkss' />Drinkss<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im2.webp' className='image' alt='Drinks' /> Drinks<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im4.webp' className='image' alt='Cakess' />Cakess<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im9.webp' className='image' alt='Daiary' />Daiary<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im11.webp' className='image' alt='Breakss' />Breakss<i className='fas fa-chevron-right'></i></li>
              <li className="dropdown-item"><img src='im10.webp' className='image' alt='Drinkss' />Drinkss<i className='fas fa-chevron-right'></i></li>
            </ul>
          )}
        </li>
        <li className="lastbar-item">About Us</li>
        <li className="lastbar-item">Contact Us</li>
        <li 
          className="lastbar-item"
          onMouseEnter={() => setIsPagesOpen(true)}
          onMouseLeave={() => setIsPagesOpen(false)}
        >
          Pages <i className='fas fa-angle-down'></i>
          {isPagesOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><i className="fas fa-gift"></i> Offer Pages</li>
              <li className="dropdown-item"><i className="fas fa-shopping-bag"></i> Checkout Page</li>
              <li className="dropdown-item"><i className="fas fa-question-circle"></i> Faq Page</li>
              <li className="dropdown-item"><i className="fas fa-users"></i> About Us Page</li>
              <li className="dropdown-item"><i className="fas fa-phone-alt"></i> Contact Us Page</li>
              <li className="dropdown-item"><i className="fas fa-shield-alt"></i> Privacy Policy Page</li>
              <li className="dropdown-item"><i className="fas fa-file-contract"></i> Terms and Conditions Page</li>
              <li className="dropdown-item"><i className="fas fa-exclamation-circle"></i> Not Found Page</li>
            </ul>
          )}
        </li>
        <li className="lastbar-item offers">
          Offers
          <span className="offers-badge">1</span>
        </li>
      </ul>
      <ul className="lastbar-menu right-menu">
        <li 
          className="lastbar-item"
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
        >
          <img src="flag.png" alt="Bangla" className='imag' />
          BANGLA
          {isLanguageOpen && (
            <ul className="dropdown-menus">
              <li className="dropdown-item"><img src='German.webp' className='imag' alt='German' />German</li>
              <li className="dropdown-item"><img src='English.svg' className='imag' alt='English' />English</li>
            </ul>
          )}
        </li>
        <li className="lastbar-item">Privacy Policy</li>
        <li className="lastbar-item">Terms & Conditions</li>
      </ul>
    </div>
  );
};

export default Lastbar;
