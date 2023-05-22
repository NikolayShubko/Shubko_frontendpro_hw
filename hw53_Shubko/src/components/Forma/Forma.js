import React from "react";
import { Formik, Form, Field } from "formik";
import "./Forma.css";
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePhoneNumber = (value) => {
  let error;
  if (!value) {
    error = "Required";
  } else if (!value.match(/^\d{12}(\d{2})?$/)) {
    error = "Phone number shorter than 12 digits or containts not a digit ";
  }
  return error;
};

const validateName = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
export const Forma = () => (
  <div>
    <h1 className="form-heading">Signup</h1>
    <Formik
      className="form"
      initialValues={{
        name: "",
        email: "",
        tel: "",
      }}
      onSubmit={(values, { resetForm }) => {
        alert(
          `You entered next info  \n ${values.name}\n ${values.email} \n ${values.tel} `
        );
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <label htmlFor="name" className="form-label">
            Enter Name
          </label>
          <Field
            id="name"
            name="name"
            validate={validateName}
            className="form-input"
          />
          {errors.name && touched.name && (
            <div className="error-message">{errors.name}</div>
          )}

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field
            id="email"
            name="email"
            validate={validateEmail}
            className="form-input"
          />
          {errors.email && touched.email && (
            <div className="error-message">{errors.email}</div>
          )}

          <label htmlFor="tel" className="form-label">
            Phone Number
          </label>
          <Field
            id="tel"
            name="tel"
            validate={validatePhoneNumber}
            className="form-input"
          />
          {errors.tel && touched.tel && (
            <div className="error-message">{errors.tel}</div>
          )}
          <button className="submit-button" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
