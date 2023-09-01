import React from "react";
import s from './Header.module.css';
import ava from "./images/ava.png";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.icon} src={ava}></img>
    </header>
  );
};

export default Header;