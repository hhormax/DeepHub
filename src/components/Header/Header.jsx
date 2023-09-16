import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import ava from "./images/ava.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.icon} src={ava}></img>
      <div className={s.loginBlock}>
        {props.isAuth 
        ? props.login
        :<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;