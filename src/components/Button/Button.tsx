import clsx from "clsx";
import React, { useState } from "react";
import "../../styles/tailwind.css";

export interface ButtonProps {
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  label: string;
  onClick?: () => void;
  rounded?: boolean;
  className?: string;
  color?: string;
  hoverColor?: string;
  type: "fullcolor" | "text" | "outline";
}

/** Primary UI component for user interaction */
export const Button = ({
  width,
  height,
  backgroundColor,
  label,
  rounded,
  className,
  color,
  hoverColor,
  type,
  ...props
}: ButtonProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      type="button"
      className={clsx(
        "flex items-center justify-center border-2 px-3 py-1 font-bold rounded-lg",
        {
          "rounded-full": rounded, // rounded
          "text-white bg-main-color border-main-color": type === "fullcolor", // 기본 fullcolor 스타일
          "text-main-color border-main-color bg-transparent":
            type === "outline", // 기본 outline 스타일
          "text-main-color bg-transparent border-none": type === "text", // 기본 text 스타일
          "border-base-color": hover && type !== "text",
          "bg-base-color": hover && type === "fullcolor",
        },
        className
      )}
      style={{
        width: width,
        height: height,
        color: color && hover ? hoverColor : color,
        backgroundColor:
          type === "fullcolor" && !hover
            ? backgroundColor
            : type === "fullcolor" && hover
            ? hoverColor
            : undefined,
        borderColor: type !== "text" && hover ? hoverColor : color,
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
      {...props}
    >
      {label}
    </button>
  );
};
