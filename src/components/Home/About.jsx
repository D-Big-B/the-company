import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import "./About.css";

export default function About() {
  return (
    <div className="About__container">
      <div className="About__heading">Recycle in Three Easy Steps</div>

      <div className="About__steps">
        <div className="About__step">
          <div className="About__step__heading">
            <SettingsIcon style={{ fontSize: "2.5rem" }} />
            <h1>Inspection</h1>
          </div>
          <p>We provide Free Car Inspection at your doorstep</p>
        </div>
        <div className="About__step">
          <div className="About__step__heading">
            <SettingsIcon style={{ fontSize: "2.5rem" }} />
            <h1>Evaluation</h1>
          </div>
          <p>
            Instantly start receiving offers and select the best price through a
            bidding system
          </p>
        </div>
        <div className="About__step">
          <div className="About__step__heading">
            <SettingsIcon style={{ fontSize: "2.5rem" }} />
            <h1>Sale</h1>
          </div>
          <p>Upload required documents and get paid Instantly</p>
        </div>
      </div>
    </div>
  );
}
