import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
        <div>
          <img className={s.ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU"></img>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.name}>Name</div>
          <div className={s.lastName}>Lastname</div>
        </div>
    </div>
  );
};

export default ProfileInfo;