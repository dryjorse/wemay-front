import React from "react";
import { Link } from "react-router-dom";
import s from "./button.module.css";

interface ButtonProps {
  padding?: string;
  children: React.ReactNode;
  link?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  padding,
  className,
}) => {
  if (link)
    return (
      <Link
        to={link}
        className={`${s.root} ${className || ""}`}
        style={{ padding: padding || "16px 24px" }}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`${s.root} ${className || ""}`}
      style={{ padding: padding || "16px 24px" }}
    >
      {children}
    </button>
  );
};

export default Button;
