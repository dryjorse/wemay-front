import React from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import { ReactComponent as Stock } from "../../assets/images/header/stock.svg";
import { ReactComponent as Bell } from "../../assets/images/header/bell.svg";
import { ReactComponent as Smile } from "../../assets/images/header/smile.svg";
import { ReactComponent as Burger } from "../../assets/images/header/burger.svg";
import { ReactComponent as Logo } from "../../assets/images/header/logo.svg";
import { ReactComponent as Person } from "../../assets/images/header/person.svg";
import s from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div className={s.route}>
      <div className={s.top}>
        <Link to="/products" className={`${s.top__link} ${s.fiolet}`}>
          <Stock />
          <span>Акции дня</span>
        </Link>
        <Link to="/products" className={`${s.top__link} ${s.red}`}>
          <Bell />
          <span>Скоро заканчивается</span>
        </Link>
        <Link to="/products" className={`${s.top__link} ${s.green}`}>
          <Smile />
          <span>Бесплатно</span>
        </Link>
      </div>
      <div className={s.line__one}></div>
      <div className={s.middle}>
        <div className={s.logo}>
          <button>
            <Burger />
          </button>
          <Logo />
        </div>
        <div className={s.search}>
          <Input option="search" placeholder="Поиск" />
        </div>
        <Button link="/auth">
          <div className={s.auth__button}>
            <Person />
            <span>Войти</span>
          </div>
        </Button>
      </div>
      <div className={s.line__two}></div>
    </div>
  );
};

export default Header;
