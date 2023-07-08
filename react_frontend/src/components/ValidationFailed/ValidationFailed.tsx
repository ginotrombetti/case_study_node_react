import React, { FC } from "react";
import { ValidationFailedWrapper, Message } from "./ValidationFailed.styled";

interface ValidationFailedProps {
  message: string;
}
const ValidationFailed: FC<ValidationFailedProps> = ({ message }) => (
  <ValidationFailedWrapper data-testid="ValidationFailed">
    <Message>{message}</Message>
  </ValidationFailedWrapper>
);

export default ValidationFailed;
