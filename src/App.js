import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.js';
import ContactPage from './Contactus/contactus';
import AboutPage from './Aboutus/aboutus';
import LoginPage from './Login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes where the full layout is displayed */}
          <Route 
            path="/" 
            element={<Layout />} 
          />
          
          {/* Individual pages without the full layout */}
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
          <Route 
            path="/login" 
            element={<LoginPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

