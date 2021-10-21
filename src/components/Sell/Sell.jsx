import React from "react";
import environmentImage from "./../../assets/images/environment.svg";
import FormSelectElement from "./FormSelectElement";
import FormTextElement from "./FormTextElement";
import FormFileElement from "./FormFileElement";

import "./Sell.css";
export default function Sell() {
  return (
    <div className="sell__container">
      <div className="sell__container__image">
        <img className="sell__image" src={environmentImage} alt="" />
      </div>
      <div className="sell__container__text">
        <div className="sell__form__owner">
          <h1>Owner's Section</h1>
          <form action="">
            <table>
              <FormTextElement label="Name" />
              <FormSelectElement label="State" />
              <FormTextElement label="City" />
              <FormTextElement label="Contact Number" />
              <FormTextElement label="Email" type="email" />
              <FormFileElement label="Aadhar Card" />
            </table>
          </form>
        </div>

        <div className="sell__form__vehicle">
          <h1>Vehicle's Section</h1>
          <form action="">
            <table>
              <FormFileElement label="Image" />
              <FormTextElement label="Year" />
              <FormSelectElement label="Make" />
              <FormTextElement label="Model" />
              <FormFileElement label="RC" />
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
