import { Formik, Form } from "formik";
import { MyCheckBoxInput, MySelectInput, MyTextInput } from "../components";

import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  // * create validations for [input.name]
  if (!input.validations) continue;
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required!");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be ${(rule as any).value || 2} at least`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Invalid Email address!");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "text" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput label={label} name={name} key={name}>
                    <option value="">Pick a game</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelectInput>
                );
              }
              throw new Error(`Type: ${type} not supported`);
            })}

            <button type="submit">SUBMIT</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
