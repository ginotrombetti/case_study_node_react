import React from "react";
import { render, screen } from "@testing-library/react";
import ValidationFailed from "./ValidationFailed";

describe("ValidationFailed", () => {
  test("should display the validation error message", () => {
    const errorMessage = "Invalid credit card number";
    render(<ValidationFailed message={errorMessage} />);

    const messageElement = screen.getByText(errorMessage);

    expect(messageElement).toBeInTheDocument();
  });
});
