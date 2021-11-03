import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import FormData from "form-data";

import InputText from "../../common/InputText";
import InputFile from "../../common/InputFile";
import axios from "./../../utils/axios";

import "./Recycle.css";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const initialValues = {
  name: "",
  aadharCard: null,
  rcImage: null,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),

  aadharCard: Yup.mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Image Size is too large.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Please upload image in jpg or png format",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
  rcImage: Yup.mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Image Size is too large.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Please upload image in jpg or png format",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});

export default function Recycle() {
  const handleSubmit = async (data) => {
    const body = {
      name: data.name,
      aadharImage: data.aadharCard,
      rcImage: data.rcImage,
    };
    const form = new FormData();
    form.append("name", data.name);
    form.append("aadharImage", data.aadharCard);
    form.append("rcImage", data.rcImage);
    try {
      console.log(body);
      const result = await axios.post("/car/postcar", form, {
        headers: {
          "x-access-token": localStorage.getItem("recycleBuddy-token"),
        },
      });
      console.log(result);
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Recycle__container">
      <h1>Recycle Your Vehicle</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          handleSubmit(data);
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form
            autoComplete="off"
            className="Register__form"
            encType="multipart/form-data"
          >
            <Field name="name" label="Name" as={InputText} />

            <InputFile
              values={values}
              name="aadharCard"
              label="Identification Proof"
              onChange={(event) => {
                setFieldValue("aadharCard", event.target.files[0]);
              }}
            />
            <InputFile
              values={values}
              name="rcImage"
              label="RC Image"
              onChange={(event) => {
                setFieldValue("rcImage", event.target.files[0]);
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="Recycle__container__button"
            >
              Sell
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
