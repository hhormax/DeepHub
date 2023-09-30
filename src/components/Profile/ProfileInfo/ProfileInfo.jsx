import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ava = 'https://the-wedding.ru/upload/photo/InfoArticles/svadebnym_spetsialistam_kak_ispolzovat_vkontakte_dlya_prodvizheniya_biznesa.jpg';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>;
  }

  return (
    <div className={s.profileInfo}>
      <div>
        <img className={s.ava} src={props.profile.photos.large || ava}/>
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.aboutMe}>{props.profile.fullName}</div>
        <div className={s.status}>{props.status}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;