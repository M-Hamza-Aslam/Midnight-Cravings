import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./CartForm.module.css";
import useInput from "../../../Hooks/use-input";

const CartForm = (props) => {
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    isError: nameInputIsInvalid,
    inputKeyStrockHandler: nameInputKeyStrockHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: streetInputValue,
    isValid: streetInputIsValid,
    isError: streetInputIsInvalid,
    inputKeyStrockHandler: streetInputKeyStrockHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetInputReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: postalCodeInputValue,
    isValid: postalCodeInputIsValid,
    isError: postalCodeInputIsInvalid,
    inputKeyStrockHandler: postalCodeInputKeyStrockHandler,
    inputBlurHandler: postalCodeInputBlurHandler,
    reset: postalCodeInputReset,
  } = useInput((value) => value.trim().length === 5);
  const {
    value: cityInputValue,
    isValid: cityInputIsValid,
    isError: cityInputIsInvalid,
    inputKeyStrockHandler: cityInputKeyStrockHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityInputReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    nameInputIsValid &&
    streetInputIsValid &&
    postalCodeInputIsValid &&
    cityInputIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    //https post req
    const userData = {
      name: nameInputValue,
      street: streetInputValue,
      postalCode: postalCodeInputValue,
      city: cityInputValue,
    };
    props.onCheckout(userData);
    nameInputReset();
    streetInputReset();
    postalCodeInputReset();
    cityInputReset();
  };
  const nameInputClasses = nameInputIsInvalid
    ? `mb-3 ${styles.inputerror}`
    : `mb-3 ${styles.inputtext}`;
  const streetInputClasses = streetInputIsInvalid
    ? `mb-3 ${styles.inputerror}`
    : `mb-3 ${styles.inputtext}`;
  const postalCodeInputClasses = postalCodeInputIsInvalid
    ? `mb-3 ${styles.inputerror}`
    : `mb-3 ${styles.inputtext}`;
  const cityInputClasses = cityInputIsInvalid
    ? `mb-3 ${styles.inputerror}`
    : `mb-3 ${styles.inputtext}`;
  return (
    <Form className="mx-2 " onSubmit={formSubmitHandler}>
      <InputGroup
        onChange={nameInputKeyStrockHandler}
        onBlur={nameInputBlurHandler}
        value={nameInputValue}
        className={nameInputClasses}
      >
        <InputGroup.Text id="inputGroup-sizing-default">
          your Name
        </InputGroup.Text>
        <FormControl
          aria-label="Your Name"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {nameInputIsInvalid && (
        <p className="text-danger">Name must not be empty</p>
      )}
      <InputGroup
        onChange={streetInputKeyStrockHandler}
        onBlur={streetInputBlurHandler}
        value={streetInputValue}
        className={streetInputClasses}
      >
        <InputGroup.Text id="inputGroup-sizing-default">street</InputGroup.Text>
        <FormControl
          aria-label="street"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {streetInputIsInvalid && (
        <p className="text-danger">Street must not be empty</p>
      )}
      <InputGroup
        onChange={postalCodeInputKeyStrockHandler}
        onBlur={postalCodeInputBlurHandler}
        value={postalCodeInputValue}
        className={postalCodeInputClasses}
      >
        <InputGroup.Text id="inputGroup-sizing-default">
          Postal Code
        </InputGroup.Text>
        <FormControl
          aria-label="Postal Code"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {postalCodeInputIsInvalid && (
        <p className="text-danger">PostalCode must be 5 digits exactly</p>
      )}
      <InputGroup
        onChange={cityInputKeyStrockHandler}
        onBlur={cityInputBlurHandler}
        value={cityInputValue}
        className={cityInputClasses}
      >
        <InputGroup.Text id="inputGroup-sizing-default">City</InputGroup.Text>
        <FormControl
          aria-label="City"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      {cityInputIsInvalid && (
        <p className="text-danger">City must not be empty</p>
      )}
      <div className="text-end mb-2">
        <Button
          className={`rounded-pill me-1  ${styles.CartFormCloseBtn}`}
          variant="secondary"
          onClick={props.onClose}
          type="button"
        >
          Close
        </Button>
        <Button
          className={`rounded-pill ${styles.CartFormConfirmBtn}`}
          variant="primary"
          disabled={!formIsValid}
          type="submit"
        >
          Confirm
        </Button>
      </div>
    </Form>
  );
};
export default CartForm;
