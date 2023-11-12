import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileStatus from "./MyProfileStatus";
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";

const MyProfileInfo = (props) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files[0]){
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.profileInfo}>
        <div>
          <img className={s.ava} src={props.photo.large}/>
        </div>
        <div className={s.descriptionBlock}>
          <div className={s.name}>{props.login}</div>
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          <div className={s.status}><MyProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
    </div>
  );
};

export default MyProfileInfo;