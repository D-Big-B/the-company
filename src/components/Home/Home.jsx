import React from "react";
import { Link } from "react-router-dom";
import homeImage from "./../../assets/images/earth.gif";
import About from "./About";

import "./Home.css";
import Review from "./Review";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <section className="home__hero__section">
        <div className="home__text__content">
          <h1>RecycleBuddy</h1>
          <h2>Recycling your Old vehicles to help keep the planet green</h2>
          <Link
            to={
              localStorage.getItem("recycleBuddy-token") ? "/recycle" : "/login"
            }
          >
            <button className="Home__container__button">
              Wanna Recycle your vehicle
            </button>
          </Link>
        </div>
        <div className="home__image__content">
          <img src={homeImage} className="home__image" alt="Scrap Vehicle" />
        </div>
      </section>
      <section className="home__about__section">
        <About />
      </section>
      <section className="home__about__section">
        <Services />
      </section>
      <section className="home__review__section">
        <Review />
      </section>
    </>
  );
}
