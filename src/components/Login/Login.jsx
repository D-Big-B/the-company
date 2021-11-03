import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Formik, Field, Form } from "formik";
import InputText from "../../common/InputText";
import axios from "./../../utils/axios";

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
  const [error, setError] = useState("");
  const handleSubmit = async (data) => {
    try {
      const body = {
        email: data.email,
        password: data.password,
      };

      const token = await axios.post("/login", body);
      localStorage.setItem("recycleBuddy-token", token.data.token);
      localStorage.setItem("recycleBuddy-data", token.data);
      window.location = "/";
    } catch (error) {
      setError("Invalid Credentials");
    }
  };
  return (
    <div className="Login__container">
      <h1>Login</h1>

      <div className="form__error"> {error} </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          handleSubmit(data);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off" className="Register__form">
            <Field name="email" label="Email" as={InputText} />
            <Field
              type="password"
              name="password"
              label="Password"
              as={InputText}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="Login__button"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>

      <div className="Login__register__content">
        Don't have an account?{"  "}
        <Link to="/register">
          <span>Click Here</span>
        </Link>
      </div>
    </div>
  );
}
