import React from "react";
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}
export declare const Button: React.FC<ButtonProps>;
