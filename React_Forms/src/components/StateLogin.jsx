import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function StateLogin() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    isNotEmpty(enteredValues.email);

  console.log(!isNotEmpty(enteredValues.email));
  console.log(!isEmail(enteredValues.email));

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(enteredValues);

    setEnteredValues({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: value,
      };
    });

    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: false,
      };
    });
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => {
      return {
        ...prevEdit,
        [identifier]: true,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
