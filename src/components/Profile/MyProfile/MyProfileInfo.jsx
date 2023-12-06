import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileStatus from "./MyProfileStatus";
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";

const ava = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikabu.ru%2Fstory%2Favatarki_zverushek_9946640&psig=AOvVaw2xPkg8YWVqWnD4TGFtWdYn&ust=1699881587552000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjm48jGvoIDFQAAAAAdAAAAABAD'

const MyProfileInfo = (props) => {
  

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]){
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.profileInfo}>
        <div>
          <img className={s.ava} src={props.photo.large || ava}/>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.name}>{props.login}</div>
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

          <div>
            {/* Full name: {props.profile.fullName} */}
          </div>
          <div>
            {/* Looking for a job: {props.profile.lookingForAJob ? "yes": "no"} */}
          </div>
          <div>
            {/* About me: {props.profile.aboutMe} */}
          </div>

          <div className={s.status}><MyProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
    </div>
  );
};

export default MyProfileInfo;