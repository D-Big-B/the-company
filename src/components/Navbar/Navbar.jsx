import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="logo-container">
        <h1>The Company</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/sell">
            Cash for your Car
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}
