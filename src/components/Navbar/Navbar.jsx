import React from "react";
import s from'./Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/messages" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/friends" className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
          <div className={s.avatars}>
            <img className={s.avatar} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"/>
            <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/512/147/147142.png"/>
            <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/512/8090/8090406.png"/>
          </div> 
        </div>
      </nav>
  );
};

export default Navbar;