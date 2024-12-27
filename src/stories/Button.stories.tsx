import React from "react";
import { Button } from "../components/Button/Button";

export default {
  title: "Example/Button",
  component: Button,
};

export const Default = () => <Button label={"Click Me"} />;
export const WithAction = () => <Button label={"Click Me"} />;
