import "../styles/styles.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formik Components Page</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Area</label>
            <Field name="jobType" as="select">
              <option value="">pick something</option>
              <option value="develop">Development</option>
              <option value="marketing">Marketing</option>
              <option value="financial">Financial</option>
              <option value="services">Services</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field name="terms" type="checkbox" />
              Term & conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
