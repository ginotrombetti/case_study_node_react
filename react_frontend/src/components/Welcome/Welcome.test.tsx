import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

describe("Welcome", () => {
  test("should display the welcome message and validation input", () => {
    render(<Welcome />);

    const welcomeMessage = screen.getByText(
      "Please refer to the README.md for more information.",
    );
    const description1 = screen.getByText("Credit Card Validator");

    const description2 = screen.getByText("Credit Card Validator");
    const validationInput = screen.getByTestId("ValidationInput");

    expect(welcomeMessage).toBeInTheDocument();
    expect(description1).toBeInTheDocument();

    expect(description2).toBeInTheDocument();
    expect(validationInput).toBeInTheDocument();
  });
});
