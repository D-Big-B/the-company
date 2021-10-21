import React from "react";
import { Formik, Form } from "formik";

export default function ApplicationForm({
  initialValues,
  validationSchema,
  children,
}) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => <Form>{children}</Form>}
    </Formik>
  );
}
