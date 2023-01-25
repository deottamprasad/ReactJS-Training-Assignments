import React from "react";
import { useFormik } from "formik";
import SignUpSchema from "../SignupSchema";

//The form consists of four fields: firstname,lastname,password and confirm_password.
//The firstname and lastname of the user is being displayed using a h1 tag.
//I have used various handler functions of useFormik to handle the events triggered in the form like
//handleBlur, handleChange and so on.
//When the form gets submitted with correct inputs, the values inside the field are being displayed 
//inside console and the form gets reseted.

const initialValues = {
  fName: "",
  lName: "",
  password: "",
  confirm_password: ""
};

function Form() {
  const customStyle = {
    marginTop: "0px",
    marginBottom: "15px"
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  });
  //console.log(errors);

  return (
    <div className="container">
      <h1>
        Hello {values.fName} {values.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="First Name"
          value={values.fName}
        />
        {errors.fName && touched.fName ? (
          <p style={customStyle}>{errors.fName}</p>
        ) : null}
        <input
          name="lName"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Last Name"
          value={values.lName}
        />
        {errors.lName && touched.lName ? (
          <p style={customStyle}>{errors.lName}</p>
        ) : null}
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="password"
          value={values.password}
        />
        {errors.password && touched.password ? (
          <p style={customStyle}>{errors.password}</p>
        ) : null}
        <input
          type="password"
          name="confirm_password"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="confirm_password"
          value={values.confirm_password}
        />
        {errors.confirm_password && touched.confirm_password ? (
          <p style={customStyle}>{errors.confirm_password}</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
