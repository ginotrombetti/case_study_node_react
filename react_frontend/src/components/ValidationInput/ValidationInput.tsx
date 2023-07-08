import React, { useState, ChangeEvent } from "react";
import { ValidationInputWrapper, Container } from "./ValidationInput.styled";
import ValidationButton from "../ValidationButton/ValidationButton";
import ValidationFailed from "../ValidationFailed/ValidationFailed";
import ValidationSuccess from "../ValidationSuccess/ValidationSuccess";

import CardDisplay from "../CardDisplay/CardDisplay";
import { validateCCNumber } from "../../services/validation.service";

const ValidationInput = () => {
  const [value, setValue] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [validationSuccess, setValidationSuccess] = useState<string | null>(
    null,
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValidationError(null);
    setValidationSuccess(null);

    const newValue: string = event.target.value;

    setValue(newValue);
  };

  const handleValidation = async () => {
    try {
      const validity = await validateCCNumber(value);
      if (validity.isValid) {
        setValidationError(null);
        setValidationSuccess(validity.message);
      }
    } catch (error) {
      setValidationSuccess(null);
      setValidationError(`${error}`);
    }
  };

  return (
    <ValidationInputWrapper data-testid="ValidationInput">
      <Container
        value={value}
        type="credit card"
        pattern="\d*"
        onChange={handleInputChange}
        placeholder="Enter credit card number"
      />
      <CardDisplay creditCardNumber={value} />

      <ValidationButton onClick={handleValidation} />
      {validationError && <ValidationFailed message={validationError} />}
      {validationSuccess && <ValidationSuccess message={validationSuccess} />}
    </ValidationInputWrapper>
  );
};

export default ValidationInput;
