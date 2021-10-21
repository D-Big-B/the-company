import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import ApplicationForm from "../../common/ApplicationForm";
import InputText from "./../../common/InputText";

import "./Login.css";

/**
 * Initial Values and Validation Schema
 */
const initialValues = {
  email: "",
  password: "",
};
const validateSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
/**
 *
 */

export default function Login() {
  return (
    <div className="Login__container">
      <h1>Login</h1>
      <ApplicationForm
        initialValues={initialValues}
        validationSchema={validateSchema}
      >
        <InputText label="Email" name="email" type="email" />
        <InputText label="Password" name="password" type="password" />
      </ApplicationForm>

      <div className="Login__button">
        <button type="submit">Login</button>
      </div>

      <div className="Login__register__content">
        Don't have an account?{"  "}
        <Link to="/register">
          <span>Click Here</span>
        </Link>
      </div>
    </div>
  );
}
