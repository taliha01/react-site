import React from "react";
import "./Ship.css";

const Ship = () => {
  return (
    <div className="ship-container">
      <div className="ship-item">
        <i className="fas fa-truck ship-icon"></i>
        <span className="tal">Free Shipping From €500.00</span>
      </div>
      <div className="ship-item">
        <i className="fas fa-headset ship-icon"></i>
        <span className="tal">Support 24/7 At Anytime</span>
      </div>
      <div className="ship-item">
        <i className="fas fa-lock ship-icon"></i>
        <span className="tal">Secure Payment Totally Safe</span>
      </div>
      <div className="ship-item">
        <i className="fas fa-gift ship-icon"></i>
        <span className="tal">Latest Offer Upto 20% Off</span>
      </div>
    </div>
  );
};

export default Ship;
