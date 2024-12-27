import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
test("renders Button with children", function () {
    render(_jsx(Button, { children: "Click me" }));
    expect(screen.getByText("Click me")).toBeInTheDocument();
});
