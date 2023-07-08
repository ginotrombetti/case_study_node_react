import React from "react";
import { render, screen } from "@testing-library/react";
import ValidationSuccess from "./ValidationSuccess";

describe("ValidationSuccess", () => {
  test("should display the validation success message", () => {
    const successMessage = "Credit card is valid";
    render(<ValidationSuccess message={successMessage} />);

    const messageElement = screen.getByText(successMessage);

    expect(messageElement).toBeInTheDocument();
  });
});
