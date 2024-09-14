import React from "react";
import "./Loginpage.css";

function Loginpage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Login with your email and password</p>
        <form>
          <div className="input-group">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>OR</p>
        <div className="social-login">
          <button className="google-btn">
            <i className="fab fa-google"></i> Login With Google
          </button>
          <button className="facebook-btn">
            <i className="fab fa-facebook-f"></i> Login With Facebook
          </button>
          <button className="github-btn">
            <i className="fab fa-github"></i> Login With Github
          </button>
        </div>
        <p>
          Don’t have an account? <a href="#signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Loginpage;
