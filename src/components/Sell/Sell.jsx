import React from "react";
import environmentImage from "./../../images/environment.svg";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import InputFile from "./InputFile";

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
              <InputText label="Name" />
              <InputSelect label="State" />
              <InputText label="City" />
              <InputText label="Contact Number" />
              <InputText label="Email" type="email" />
              <InputFile label="Aadhar Card" />
            </table>
          </form>
        </div>

        <div className="sell__form__vehicle">
          <h1>Vehicle's Section</h1>
          <form action="">
            <table>
              <InputFile label="Image" />
              <InputText label="Year" />
              <InputSelect label="Make" />
              <InputText label="Model" />
              <InputFile label="RC" />
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
