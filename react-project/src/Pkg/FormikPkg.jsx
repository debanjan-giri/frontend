import React from "react";
import { useFormik } from "formik";

export function Formik() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      key_1: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="key_1"
          placeholder="username"
          className="form-control mb-2"
          value={values?.key_1}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary w-100">
          submit
        </button>
      </form>
    </div>
  );
}
