import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import "./Services.css";

export default function Services() {
  return (
    <div className="Services__container">
      <div className="Services__quote">
        <FormatQuoteIcon style={{ fontSize: "3rem" }} />

        <p>Help us Save the planet on car at a time</p>
        <FormatQuoteIcon
          style={{ fontSize: "3rem", position: "absolute", right: "0" }}
        />
      </div>
      <div className="Services__main">
        <span>Our</span>
        <h1>Services</h1>
        <div className="Services__main__para">
          We offers an end-to-end, customer-centric disposal program for
          end-of-life vehicles.
          <p>
            We create value for our customers by recycling vehicles. We not only
            make the surrounding cleaner but also help the planet stay green and
            reduce its carbon footprint.
          </p>
        </div>
      </div>
    </div>
  );
}