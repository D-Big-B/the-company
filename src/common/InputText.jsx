import React from "react";
import { ErrorMessage, useField } from "formik";

export default function InputText(props) {
  const [field] = useField(props);

  return (
    <div className="input__div">
      <label className="input__label">{props.label}</label>
      <input
        className={props.className || "input__text"}
        type={props.type}
        id={props.name}
        {...field}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="error__label"
      />
    </div>
  );
}
