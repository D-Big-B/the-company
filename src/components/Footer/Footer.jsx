import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo__container">
        <h1>The Company</h1>
        <br />
        All Rights Reserved © 2021
      </div>
      <div className="social-links">
        <ul>
          <li>
            <a href="google.com">FB</a>
          </li>
          <li>
            <a href="google.com">IG</a>
          </li>
          <li>
            <a href="google.com">TW</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
