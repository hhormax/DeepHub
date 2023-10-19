import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import logo from '../Header/images/logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <NavLink to="/myProfile"><img className={s.icon} src={logo} /></NavLink>
      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div >{props.login} - <button className={s.logout} onClick={props.logout}>Log out</button></div> 
        : <NavLink className={s.login} to={'/login'}>Log in</NavLink>}
      </div>
    </header>
  );
};

export default Header;