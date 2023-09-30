import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileInfo from "./MyProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const MyProfile = (props) => {
  return (
    <div className={s.content}>
      <MyProfileInfo login={props.login} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
      </div>
  );
};

export default MyProfile;