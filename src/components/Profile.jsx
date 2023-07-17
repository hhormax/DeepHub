import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src="https://static4.depositphotos.com/1003326/319/i/450/depositphotos_3191160-stock-photo-blurry-bright-background.jpg"></img>
        </div>
        <div>
          ava + descr
        </div>
        <div>
          posts
          <div>
            new post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;