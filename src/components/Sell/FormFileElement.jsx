import React from "react";

export default function FormFileElement({ label }) {
  return (
    <tr>
      <td>
        <label className="sell__form__label">{label} : </label>
      </td>

      <td>
        <label className="sell__form__file">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          Upload
        </label>
      </td>
    </tr>
  );
}
