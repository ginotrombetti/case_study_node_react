import React, { FC } from "react";
import { CardDisplayWrapper, CardTypeText } from "./CardDisplay.styled";

interface CardDisplayProps {
  creditCardNumber: string;
}

interface CardType {
  name: string;
  pattern: RegExp;
}

const CardDisplay: FC<CardDisplayProps> = ({ creditCardNumber }) => {
  const cardTypes: CardType[] = [
    { name: "Visa", pattern: /^4/ },
    { name: "Mastercard", pattern: /^5[1-5]/ },
    { name: "American Express", pattern: /^3[47]/ },
    { name: "Discover", pattern: /^(6011|65)/ },
  ];

  const getCardName = (): string | null => {
    for (const cardType of cardTypes) {
      if (cardType.pattern.test(creditCardNumber)) {
        return cardType.name;
      }
    }
    return null;
  };

  const cardName = getCardName();
  return (
    <CardDisplayWrapper data-testid="CardDisplay">
      <CardTypeText>Credit Card Number: {creditCardNumber}</CardTypeText>
      <CardTypeText>Card Type: {cardName || "Unknown"}</CardTypeText>{" "}
    </CardDisplayWrapper>
  );
};

export default CardDisplay;
