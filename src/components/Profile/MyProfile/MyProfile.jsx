import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileInfo from "./MyProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const MyProfile = (props) => {
  return (
    <div className={s.content}>
      <MyProfileInfo login={props.login} 
                      photo={props.photo}
                      status={props.status} 
                      updateStatus={props.updateStatus} 
                      isOwner={props.isOwner} 
                      savePhoto={props.savePhoto}/>
      <MyPostsContainer />
      </div>
  );
};

export default MyProfile;

