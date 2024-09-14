import React from 'react';
import './Bazar.css';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact-header">
                <div className='header-image'>
                <img src="vg5.jpg" alt="Start Image" className="header-image-start" />
                </div>
                <div className='header-image'>
                <h2>Contact Us</h2>
                </div>
                <div className='header-image'>
                <img src="vg5.jpg" alt="Start Image" className="header-image-start" />
                </div>
            </div>

            <div className="contact-grid">
                <div className="contact-box email-box">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <h3>Email Us</h3>
                   
                    <p> <a href="mailto:info@kachabazar.com">info@kachabazar.com</a>Interactively grow empowered for process-centric total linkage.</p>
                </div>
                <div className="contact-box call-box">
                    <div className="icon">
                        <i className="fas fa-bell"></i>
                    </div>
                    <h3>Call Us</h3>
                    <p><a href="tel:02900124667">029-00124667</a> Distinctively disseminate focused solutions clicks-and-mortar ministate.</p>
                </div>
                <div className="contact-box location-box">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Location</h3>
                    <p>Boho One, Bridge Street West, Middlesbrough, North Yorkshire, TS2 1AE.</p>
                    <p>561-4535 Nulla LA United States 96522.</p>
                </div>
            </div>
        </div>

    );
}

export default Contact;
