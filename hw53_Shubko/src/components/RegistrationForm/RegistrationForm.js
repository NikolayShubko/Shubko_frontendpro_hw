import { Formik, Form, Field } from "formik";
import "./RegistrationForm.css";
import React from "react";

const RegistrationForm = () => {
  const EMAIL_VALIDATION = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const PHONE_VALIDATION = /^\d{12}(\d{2})?$/;
  const fields = [
    {
      id: "userName",
      name: "name",
    },
    {
      id: "userEmail",
      name: "email",
    },
    {
      id: "userPhone",
      name: "phone",
    },
  ];
  const validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!EMAIL_VALIDATION.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!values.phone.match(PHONE_VALIDATION)) {
      errors.phone =
        "Phone number shorter than 12 digits or containts not a digit ";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  };
  const handleSubmit = (values, { resetForm }) => {
    alert(
      `You entered next info  \n ${values.name}\n ${values.email} \n ${values.phone} `
    );
    resetForm();
  };
  return (
    <div>
      <h1 className="form-heading">Signup</h1>
      <Formik
        className="form"
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validate={validation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            {fields.map((elem, index) => {
              return (
                <>
                  <label key={index} htmlFor={elem.id} className="form-label">
                    Enter {elem.name}
                  </label>
                  <Field
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    className="form-input"
                  />
                  {errors[elem.name] && touched[elem.name] && (
                    <div className="error-message">{errors[elem.name]}</div>
                  )}
                </>
              );
            })}
            <button className="submit-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
