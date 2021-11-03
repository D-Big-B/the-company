import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import InputText from "../../common/InputText";
import axios from "./../../utils/axios";

import "./Register.css";
/**
 * Initial Values and Validation Schema
 */
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validateSchema = Yup.object({
  name: Yup.string().required("Please Enter your full name"),
  email: Yup.string().email("Email is invalid").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});
/**
 *
 */
export default function Register() {
  const [error, setError] = useState("");
  const handleSubmit = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      isCustomer: true,
    };
    try {
      await axios.post(`/register`, body);
      window.location = "/login";
    } catch (err) {
      setError("Email already exists");
    }
  };

  return (
    <div className="Register__container">
      <h1>Register</h1>
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
            <Field name="name" label="Full Name" as={InputText} />
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
              className="Register__button"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
