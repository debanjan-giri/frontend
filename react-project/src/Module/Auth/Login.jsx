import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function Login() {
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("username required"),
      password: Yup.number().required("password required"),
    }),
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-2 border py-5 px-4 rounded-3 w-25"
      >
        <p className="m-1">Login :</p>
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          className={`form-control ${errors?.username ? "is-invalid" : ""} `}
          value={values.username}
          onChange={handleChange}
        />
        {errors?.username && (
          <p className="text-danger m-0">{errors?.username}</p>
        )}
        <input
          type="text"
          name="password"
          placeholder="enter your password"
          className="form-control"
          value={values.password}
          onChange={handleChange}
        />
        {errors?.password && (
          <p className="text-danger m-0">{errors?.password}</p>
        )}
        <button className="btn btn-primary" type="submit">
          login
        </button>
      </form>
    </div>
  );
}

export default Login;
