import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__company">
        <h1>RecycleBuddy</h1>
        <br />
        <p>All Rights Reserved © 2021</p>
      </div>
      <div className="footer__contact">
        <p>Contact us :</p>
        +91 9136222320
        <br /> help@recyclebuddy.tech
      </div>
    </div>
  );
}
