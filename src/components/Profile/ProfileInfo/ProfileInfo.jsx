import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import MyProfileStatus from "../MyProfile/MyProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>;
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.large}/>
      </div>
      <div className={s.aboutMe}>{props.profile.aboutMe}</div>
      <div className={s.aboutMe}>{props.profile.fullName}</div>
      <div>(user status)</div>
    </div>
  );
};

export default ProfileInfo;