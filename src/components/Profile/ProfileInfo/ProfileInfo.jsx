import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from '../MyProfile/ProfileStatus';

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
      <ProfileStatus status={props.status} />
    </div>
  );
};

export default ProfileInfo;