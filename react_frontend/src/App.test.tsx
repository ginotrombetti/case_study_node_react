import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render the App component", () => {
    render(<App />);

    // Verify the presence of specific elements in the rendered component
    const appElement = screen.getByTestId("App");
    const welcomeElement = screen.getByTestId("Welcome");

    expect(appElement).toBeInTheDocument();
    expect(welcomeElement).toBeInTheDocument();
  });
});
