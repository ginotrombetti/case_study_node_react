import React, { FC } from "react";
import { ValidationSuccessWrapper, Message } from "./ValidationSuccess.styled";

interface ValidationSuccessProps {
  message: string;
}

const ValidationSuccess: FC<ValidationSuccessProps> = ({ message }) => (
  <ValidationSuccessWrapper data-testid="ValidationSuccess">
    <Message>{message}</Message>
  </ValidationSuccessWrapper>
);

export default ValidationSuccess;
