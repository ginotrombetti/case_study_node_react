import React, { FC } from "react";
import { ValidationButtonWrapper, Button } from "./ValidationButton.styled";

interface ValidationButtonProps {
  onClick: () => void;
}

const ValidationButton: FC<ValidationButtonProps> = ({ onClick }) => (
  <ValidationButtonWrapper data-testid="ValidationButton">
    <Button onClick={onClick}>Validate</Button>
  </ValidationButtonWrapper>
);

export default ValidationButton;
