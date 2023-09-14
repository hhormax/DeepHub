import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileInfo from "./MyProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const MyProfile = (props) => {
  return (
    <div className={s.content}>
      <MyProfileInfo profile={props.profile}/>
      <MyPostsContainer />
      </div>
  );
};

export default MyProfile;