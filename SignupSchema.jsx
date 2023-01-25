import * as Yup from "yup";

//Here I have defined the Validation Schema of different input fields in my Form. This is imported inside Form component so 
//that it can be used by useFormik() to define validations for the input fields.

const SignUpSchema = Yup.object().shape({
  fName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  lName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),

  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm Password is not same as Password"
    )
});

export default SignUpSchema;
