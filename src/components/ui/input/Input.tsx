import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/images/header/search.svg";
import s from "./input.module.css";

interface InputProps {
  option: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ option, placeholder }) => {
  if (option === "search")
    return (
      <div className={s.root}>
        <SearchIcon />
        <input type="text" placeholder={placeholder} />
      </div>
    );

  return <input type="text" />;
};

export default Input;
