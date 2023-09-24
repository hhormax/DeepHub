import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../Header/images/logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to="/myProfile"><img className={s.icon} src={logo} /></NavLink>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;