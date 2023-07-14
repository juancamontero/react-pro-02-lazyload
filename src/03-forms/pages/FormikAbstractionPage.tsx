import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput, MySelectInput, MyCheckBoxInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractionPage = () => {
  return (
    <div>
      <h1>Formik Abstraction Page</h1>
      <hr />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required!"),
          lastName: Yup.string()
            .max(15, "Must be 10 characters or less")
            .required("Required!"),
          email: Yup.string()
            .email("Invalid Email address!")
            .required("Required"),
          terms: Yup.boolean().oneOf(
            [true],
            "Please accept terms & conditions to submit!"
          ),
          jobType: Yup.string()
            .required("Please select a Job Area to continue")
            .notOneOf(["services"], "this option is not available now!"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="John"
            />

            <MyTextInput label="Last Name" name="lastName" placeholder="Dow" />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jhondow@mail.com"
            />

            <MySelectInput
              label="Job Area"
              name="jobType"
              placeholder="Select one"
            >
              <option value="">pick something</option>
              <option value="develop">Development</option>
              <option value="marketing">Marketing</option>
              <option value="financial">Financial</option>
              <option value="services">Services</option>
              <option value="other">Other</option>
            </MySelectInput>

            <MyCheckBoxInput label="Terms & conditions accepted" name="terms" />

            <button type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
