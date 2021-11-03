import React, { useState } from "react";

export default function PreviewImage({ file }) {
  const [preview, setPreview] = useState("");
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>
      {!preview ? (
        <span>Loading...</span>
      ) : (
        <img src={preview} alt="preview" width="50px" height="50px" />
      )}
    </>
  );
}
