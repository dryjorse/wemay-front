import React from "react";
import { Link } from "react-router-dom";
import s from "./button.module.css";

interface ButtonProps {
  padding?: string;
  children: React.ReactNode;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ children, link, padding }) => {
  if (link)
    return (
      <Link
        to={link}
        className={s.root}
        style={{ padding: padding || "16px 24px" }}
      >
        {children}
      </Link>
    );

  return <button></button>;
};

export default Button;
