import React, { useState, useEffect } from 'react';
import './Slider.css';

const slides = [
  { id: 1, text: "The Best Quality Products Guaranteed",  backgroundColor: "		#FFD580", imageUrl: "/chng.png" },
  { id: 2, text: "Delicious and Healthy Fruits", backgroundColor: "#ADD8E6", imageUrl: "/vg6.png" },
  { id: 3, text: "Fresh and Organic Vegetables", backgroundColor: "		#FFD580", imageUrl: "/chng.png" },
  { id: 4, text: "Delicious and Healthy Fruits", backgroundColor: "#ADD8E6", imageUrl: "/vg6.png" },
  { id: 5, text: "Get Your Daily Essentials Here", backgroundColor: "#FFD580", imageUrl: "/chng.png" },
  { id: 6, text: "Delicious and Healthy Fruits", backgroundColor: "#ADD8E6", imageUrl: "/vg6.png" }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div
        className="slide"
        style={{
          backgroundColor: slides[currentSlide].backgroundColor,
        }}
      >
        <div className="slide-content">
          <div className="text-content">
            <h2>{slides[currentSlide].text}</h2>
            <p>The Best Quality Products Guaranteed!</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <img src={slides[currentSlide].imageUrl} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>

      <div className="right-content">
        <div className='head'>
          <h4>Latest Super Discount Active Coupon Code</h4>
        </div>
        <div className='cont1'>
          <div>
            <img src='/imgs1.webp' className='img1' alt='Coupon 1' />
          </div>
          <div className='coup'>
            <h3>10% Off <span className="active">Active</span></h3>
            <p>Summer Gift Voucher</p>
            <div className="timer green-timer">
              <div className="time-box">64</div>
              <span>:</span>
              <div className="time-box">16</div>
              <span>:</span>
              <div className="time-box">27</div>
              <span>:</span>
              <div className="time-box">45</div>
            </div>
          </div>
          <div className='cop1'>
            <button className="coupon-code">SUMMER24</button>
            <p>* This coupon applies when shopping more than $500</p>
          </div>
        </div>
        <div className='cont2'>
          <div>
            <img src='/imgs2.webp' className='img1' alt='Coupon 2' />
          </div>
          <div className='coup'>
            <h3>10% Off <span className="active1">Active</span></h3>
            <p>Summer Gift Voucher</p>
            <div className="timer red-timer">
              <div className="time-box">00</div>
              <span>:</span>
              <div className="time-box">00</div>
              <span>:</span>
              <div className="time-box">00</div>
              <span>:</span>
              <div className="time-box">00</div>
            </div>
          </div>
          <div className='cop1'>
            <button className="coupon-code">SUMMER24</button>
            <p>* This coupon applies when shopping more than $500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
