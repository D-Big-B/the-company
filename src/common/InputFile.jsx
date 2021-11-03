import React, { useRef } from "react";
import { ErrorMessage, useField } from "formik";

import PreviewImage from "./PreviewImage";

export default function InputFile(props) {
  const imageRef = useRef(null);
  const [field] = useField(props);
  return (
    <div className="input__div">
      <label className="input__label">{props.label}</label>
      <input type="file" hidden ref={imageRef} onChange={props.onChange} />
      <div className="input__preview">
        <button
          onClick={() => {
            imageRef.current.click();
          }}
          type="button"
          className="input__file__button"
        >
          Upload
        </button>

        {props.values[`${props.name}`] && (
          <PreviewImage file={props.values[`${props.name}`]} />
        )}
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="error__label"
      />
    </div>
  );
}
