import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src="https://static4.depositphotos.com/1003326/319/i/450/depositphotos_3191160-stock-photo-blurry-bright-background.jpg"></img>
        </div>
        <div>
          ava + descr
        </div>
        <MyPosts />
      </div>
  );
};

export default Profile;