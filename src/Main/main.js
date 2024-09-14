import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className="hero-section">
    <div className="hero-container">
      <img src="img1.webp" alt="Left Graphic" className="hero-image1"/>
      <div className="hero-text">
        <h1>Get Your Daily Needs From Our KachaBazar Store</h1>
        <p>
          There are many products you will find in our shop. Choose your daily necessary product from our KachaBazar shop and get some special offers.
        </p>
        <div className="app-buttons">
          <a href="https://www.apple.com/app-store/" className="app-button">
            <i className="fab fa-apple"></i> Available on the App Store
          </a>
          <a href="https://play.google.com/store" className="app-button">
            <i className="fab fa-google-play"></i> Available on Google Play
          </a>
        </div>
      </div>
      <img src="img2.webp" alt="Right Graphic" className="hero-image"/>
    </div>
  </section>
  );
}

export default Main;