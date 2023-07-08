import React from "react";
import {
  WelcomeWrapper,
  Container,
  Description,
  Title,
} from "./Welcome.styled";
import ValidationInput from "../ValidationInput/ValidationInput";

const Welcome = () => (
  <WelcomeWrapper data-testid="Welcome">
    <Container>
      <Title>Hello Team, Welcome to my Validator.</Title>
      <Description>
        Please refer to the README.md for more information.
      </Description>
      <Description>Credit Card Validator</Description>
      <ValidationInput />
    </Container>
  </WelcomeWrapper>
);

export default Welcome;
