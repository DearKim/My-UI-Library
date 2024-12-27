import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button/Button";

test("renders Button with children", () => {
  render(<Button label="Click Me" type={"fullcolor"} />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
