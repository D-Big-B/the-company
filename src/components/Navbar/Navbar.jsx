import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar__logo__container">
        <h1>ReinCarNation</h1>
        <p>Creating Value from scrap</p>
      </div>
      <ul className="Navbar__nav__links">
        <li>
          <Link className="Navbar__nav__link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="Navbar__nav__link" to="/sell">
            Cash for your Car
          </Link>
        </li>
      </ul>
      <Link className="Navbar__login" to="/login">
        <span>Login</span>
      </Link>
    </>
  );
}
