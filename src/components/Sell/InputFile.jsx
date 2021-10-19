import React from "react";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";

export default function InputFile({ label }) {
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
