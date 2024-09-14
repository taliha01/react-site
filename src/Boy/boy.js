import React from 'react';
import './Boy.css';

const Boy = () => {
  return (
    <div className="boy-container">
      <div className="white-box">
        <div className="content">
          <h4>Organic Products and Food</h4>
          <h2>Quick Delivery to Your Home</h2>
          <p>
            There are many products you will find in our shop. Choose your daily necessary product
            from our KachaBazar shop and get some special offers. See our latest discounted products
            from here and get a special discount.
          </p>
          <button className="download-btn">Download App</button>
        </div>
        <div className="image-container">
          <img src="delivery-boy.webp " alt="Delivery Boy" />
        </div>
      </div>
    </div>
  );
};

export default Boy;
