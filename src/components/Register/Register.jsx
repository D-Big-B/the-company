import React from "react";
import * as Yup from "yup";

import ApplicationForm from "../../common/ApplicationForm";
import InputText from "../../common/InputText";

import "./Register.css";

/**
 * Initial Values and Validation Schema
 */
const initialValues = {
  userName: "",
  email: "",
  password: "",
};
const validateSchema = Yup.object({
  userName: Yup.string().required("User Name is required field").min(3).max(25),
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});
/**
 *
 */
export default function Register() {
  return (
    <div className="Register__container">
      <h1>Register</h1>

      <ApplicationForm
        initialValues={initialValues}
        validationSchema={validateSchema}
      >
        <InputText label="User Name" name="userName" type="text" />
        <InputText label="Email" name="email" type="email" />
        <InputText label="Password" name="password" type="password" />
      </ApplicationForm>
      <div className="Register__content">
        <input type="checkbox" className="check-box" />
        <span>I agree to the terms &amp; conditions</span>
        <div className="Register__button">
          <button type="submit" className="Register__button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
