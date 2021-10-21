import React from "react";

export default function FormElement({ label, type = "text" }) {
  return (
    <tr>
      <td>
        <label className="sell__form__label" for={label}>
          {label} :{" "}
        </label>
      </td>

      <td>
        <input className="sell__form__input" type={type} placeholder={label} />
      </td>
    </tr>
  );
}
