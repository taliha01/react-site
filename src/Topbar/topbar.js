import React, { useEffect, useState } from 'react';
import './Topbar.css';
import { FaBell, FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Topbar = () => {
  const [topbarPosition, setTopbarPosition] = useState(50); // Initially top: 50px

  const handleScroll = () => {
    if (window.innerWidth > 991) { // Apply scroll effect only for screens wider than 991px
      if (window.scrollY > 50) {
        setTopbarPosition(0); // Fix the Topbar to the top when scrolling past 50px
      } else {
        setTopbarPosition(50); // Keep the Topbar at 50px from the top when not scrolling
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 991) {
      setTopbarPosition(0); // For small screens, always keep the topbar at the top
    } else {
      // Reset to default position on larger screens
      setTopbarPosition(window.scrollY > 50 ? 0 : 50);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check to set the position based on screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="topbar" style={{ top: `${topbarPosition}px` }}>
      <div className="topbar-container">
        {/* Left Section: Logo and Search Bar */}
        <div className="left-section">
          <div className="logo">
            <img src="/logo3.svg" alt="Kacha Bazar Logo" className="footer-logo" />
          </div>

          <div className="search-bar relative">
            <input
              type="text"
              placeholder="Search for products (e.g., fish, apple, oil)"
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300"
            />
            <FaSearch className="search-icon absolute top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="right-section">
          <div className="icons">
            <FaBell className="icon" />
            <div className="cart-icon">
              <FaShoppingCart className="icon" />
              <span className="cart-badge">0</span> 
            </div>
            <FaUser className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
