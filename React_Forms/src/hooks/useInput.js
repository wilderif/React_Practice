import { useState } from "react";

export const useInput = (defaultvalue, vaidationFn) => {
  const [enteredValue, setEnteredValue] = useState(defaultvalue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = vaidationFn(enteredValue);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = (identifier) => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
};
