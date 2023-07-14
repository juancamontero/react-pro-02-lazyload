import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required!"),
      lastName: Yup.string()
        .max(15, "Must be 10 characters or less")
        .required("Required!"),
      email: Yup.string().email("Invalid Email address!").required("Required"),
    }),
  });

  return (
    <div>
      <h1>Formik YUP Page</h1>
      <hr />

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps("firstName")}
          className={`${errors.firstName && "has-error"}`}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          className={`${errors.lastName && "has-error"}`}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          {...getFieldProps("email")}
          className={`${errors.email && "has-error"}`}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
