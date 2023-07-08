import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ValidationButton from "./ValidationButton";

describe("ValidationButton", () => {
  test("should call the onClick function when the button is clicked", () => {
    const onClickMock = jest.fn();
    render(<ValidationButton onClick={onClickMock} />);

    const button = screen.getByRole("button", { name: "Validate" });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
