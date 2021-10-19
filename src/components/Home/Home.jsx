import React from "react";
import { Link } from "react-router-dom";
import homeImage from "./../../images/vehiclesSale.svg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home__container">
      <div className="home__text__content">
        <h1>The Company</h1>
        <h2>Recycling your Old vehicles to help keep the planet green</h2>
        <Link to="/sell">
          <button>Wanna Sell Your Scrap Vehicle</button>
        </Link>
      </div>
      <div className="home__image__content">
        <img src={homeImage} className="home__image" alt="Scrap Vehicle" />
      </div>
    </div>
  );
}
