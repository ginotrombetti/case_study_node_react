import React from "react";
import { render, screen } from "@testing-library/react";
import CardDisplay from "./CardDisplay";

describe("CardDisplay", () => {
  test("should display the credit card number and card type", () => {
    const creditCardNumber = "4111111111111111";
    render(<CardDisplay creditCardNumber={creditCardNumber} />);

    const cardNumberText = screen.getByText(
      `Credit Card Number: ${creditCardNumber}`,
    );
    const cardTypeText = screen.getByText("Card Type: Visa");

    expect(cardNumberText).toBeInTheDocument();
    expect(cardTypeText).toBeInTheDocument();
  });

  test('should display "Unknown" for card type when the card number does not match any pattern', () => {
    const creditCardNumber = "1234567890123456";
    render(<CardDisplay creditCardNumber={creditCardNumber} />);

    const cardNumberText = screen.getByText(
      `Credit Card Number: ${creditCardNumber}`,
    );
    const cardTypeText = screen.getByText("Card Type: Unknown");

    expect(cardNumberText).toBeInTheDocument();
    expect(cardTypeText).toBeInTheDocument();
  });
});
