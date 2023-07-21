import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
        <div>
          <img src="https://static4.depositphotos.com/1003326/319/i/450/depositphotos_3191160-stock-photo-blurry-bright-background.jpg"></img>
        </div>
        <div className={s.descriptionBlock}>
          ava + descr
        </div>
    </div>
  );
};

export default ProfileInfo;