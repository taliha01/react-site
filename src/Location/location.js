import React from 'react';
import './Location.css';

const Location = () => {
    return (
        <div className="location-container">
            <div className="location-image">
                <img src="/contact-us.webp" alt="Support Illustration" />
            </div>
            <div className="location-form">
                <h2>For any support just send your query</h2>
                <p>Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures.</p>
                <form>
                    <div className="form-group">
                        <div className="input-container">
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="input-container">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="input-container">
                        <label>Subject</label>
                        <input type="tex" placeholder="Enter Your Subject" />
                    </div>
                    <div className="input-container">
                        <label>Message</label>
                        <textarea placeholder="Write your message here"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Location;
