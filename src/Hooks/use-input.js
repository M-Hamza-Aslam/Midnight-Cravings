import { useState } from "react";
const useInput = (validityCheker) => {
  const [inputValue, setInputValue] = useState("");
  const [inputisTouched, setInputIsTouched] = useState(false);

  const enteredInputIsValid = validityCheker(inputValue);
  const isError = inputisTouched && !enteredInputIsValid;

  const inputKeyStrockHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setInputIsTouched(false);
    setInputValue("");
  };
  return {
    value: inputValue,
    isValid: enteredInputIsValid,
    isError,
    inputKeyStrockHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
