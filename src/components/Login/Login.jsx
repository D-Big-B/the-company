import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";
export default function Login() {
  return (
    <div className="loginPage-container">
      <div className="form-box">
        <h1>Login</h1>
        <form action id="login" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="User ID or Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <input type="checkbox" className="check-box" />
          <span>Remember Password</span>

          <div className="login-container">
            <button type="submit" className="submit-btn">
              Login
            </button>
            <span>or</span>
            <button type="submit" className="submit-btn">
              Login With Google
            </button>
          </div>

          <div className="register-container">
            <span>Don't have an account? </span>
            <Link to="/register">click here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
