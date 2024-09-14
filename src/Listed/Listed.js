import React from 'react';
import './Listed.css';

const Listed = () => {
  return (
    <>
    <div className="contact-header">
      <div className='header-image'>
        <img src="vg5.jpg" alt="Start Image" className="header-image-start" />
      </div>
      <div className='header-image'>
        <h2>About Us</h2>
      </div>
      <div className='header-image'>
        <img src="vg5.jpg" alt="Start Image" className="header-image-start" />
      </div>
    </div>
    <div className="unique-container">
        <div className="unique-text-container">
          <h2>Welcome to our KachaBazar shop</h2>
          <p>
            Holistically seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or organic sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal. Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
          </p>
          <div className="unique-stat-container">
            <div className="unique-stat-box">
              <h3>8K</h3>
              <p className='bl'>Lovely Customer</p>
              <p>Competently productize virtual models without performance.</p>
            </div>
            <div className="unique-stat-box">
              <h3>10K</h3>
              <p className='bl'>Listed Products</p>
              <p>Dynamically morph team driven partnerships after vertical.</p>
            </div>
          </div>
        </div>
        <div className="unique-image-container">
          <img src="text 3.jpg" alt="KachaBazar" />
        </div>
      </div></>
  );
}

export default Listed;
