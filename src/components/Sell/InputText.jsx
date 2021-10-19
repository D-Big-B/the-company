import React from "react";

export default function InputText({ label, type = "text" }) {
  return (
    <tr>
      <td>
        <label className="sell__form__label" htmlfor={label}>
          {label} :{" "}
        </label>
      </td>

      <td>
        <input
          className="sell__form__input"
          type={type}
          name={label}
          id={label}
          placeholder={label}
        />
      </td>
    </tr>
  );
}
