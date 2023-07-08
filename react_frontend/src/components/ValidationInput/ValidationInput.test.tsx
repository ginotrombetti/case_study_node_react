import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ValidationInput from "./ValidationInput";
import { validateCCNumber } from "../../services/validation.service";

jest.mock("../../services/validation.service");

describe("ValidationInput", () => {
  test("should update input value on change", () => {
    render(<ValidationInput />);

    const input = screen.getByPlaceholderText(
      "Enter credit card number",
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "4111111111111111" } });

    expect(input.value).toBe("4111111111111111");
  });

  test("should trigger validation and display success message", async () => {
    const mockValidateCCNumber = validateCCNumber as jest.Mock;
    mockValidateCCNumber.mockResolvedValue({
      isValid: true,
      message: "Credit card number is valid",
    });

    render(<ValidationInput />);

    const input = screen.getByPlaceholderText("Enter credit card number");
    const button = screen.getByRole("button", { name: "Validate" });

    fireEvent.change(input, { target: { value: "4111111111111111" } });
    fireEvent.click(button);

    await waitFor(() => {
      const successMessage = screen.getByText("Credit card number is valid");
      expect(successMessage).toBeInTheDocument();
    });

    expect(mockValidateCCNumber).toHaveBeenCalledTimes(1);
    expect(mockValidateCCNumber).toHaveBeenCalledWith("4111111111111111");
  });
});
