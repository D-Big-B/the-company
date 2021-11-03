import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

import "./Navbar.css";
import axios from "./../../utils/axios";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("recycleBuddy-token")) setLogin(true);
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleLogout = async () => {
    await axios.post(
      "/logout",
      {},
      {
        headers: {
          "x-access-token": localStorage.getItem("recycleBuddy-token"),
        },
      }
    );
    localStorage.removeItem("recycleBuddy-token");
    setLogin(false);
    window.location = "/";
  };
  return (
    <div className="Navbar__container">
      <div className="Navbar__logo__container">
        <h1>RecycleBuddy</h1>
      </div>
      <div className="Navbar__menu__icon" onClick={handleClick}>
        {clicked ? <CloseRounded /> : <MenuRounded />}
      </div>
      <ul
        className={clicked ? "Navbar__nav__links active" : "Navbar__nav__links"}
      >
        <li>
          <Link onClick={handleClick} className="Navbar__nav__link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link
            onClick={handleClick}
            className="Navbar__nav__link"
            to={
              localStorage.getItem("recycleBuddy-token") ? "/recycle" : "/login"
            }
          >
            Recycle Your Vehicle
          </Link>
        </li>
        <li>
          {login ? (
            <Link onClick={handleLogout} className="Navbar__login" to="/">
              <span>Logout</span>
            </Link>
          ) : (
            <Link onClick={handleClick} className="Navbar__login" to="/login">
              <span>Login</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
