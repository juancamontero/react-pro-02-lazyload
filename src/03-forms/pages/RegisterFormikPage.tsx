import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <hr />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Must be 2 characters at least")
            .max(15, "Must be 15 characters or less"),
          email: Yup.string()
            .email("Invalid Email address!")
            .required("Required"),
          password1: Yup.string().min(
            6,
            "Password must be 6 characters at least"
          ),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords doesn't match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Full name" name="name" placeholder="John Doe" />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="johndow@mail.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="******"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              type="password"
              placeholder="******"
            />

            <button type="submit"> Create </button>
            <button type="button" onClick={handleReset}>
              {" "}
              Reset{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
