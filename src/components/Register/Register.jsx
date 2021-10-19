import React from "react";

import "./Register.css";
export default function Register() {
  return (
    <div className="registerPage-container">
      <div className="form-box">
        <h1>Register</h1>
        <form action id="register" className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="User Id"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email Id"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <div className="registerPage__register__container">
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms &amp; conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
