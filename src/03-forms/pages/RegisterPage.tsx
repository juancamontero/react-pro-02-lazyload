import { FormEvent } from "react";

import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <hr />
      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is mandatory!</span>}

        <input
          onChange={onChange}
          type="email"
          placeholder="E-mail"
          value={email}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>This e-mail is not valid!</span>}

        <input
          onChange={onChange}
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          className={`${password1.trim().length < 6 && "has-error"}`}
        />
        {password1.trim().length <= 0 && <span>This field is mandatory!</span>}
        {password1.trim().length < 6 && (
          <span>Password must be 6 characters al least!</span>
        )}

        <input
          onChange={onChange}
          type="password"
          placeholder="Repeat password"
          value={password2}
          name="password2"
          className={`${password1 !== password2 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>This field is mandatory!</span>}
        {password1 !== password2 && <span>Password doesn't match!</span>}

        <button type="submit"> Create </button>
        <button type="button" onClick={resetForm}>
          {" "}
          Reset{" "}
        </button>
      </form>
    </div>
  );
};
