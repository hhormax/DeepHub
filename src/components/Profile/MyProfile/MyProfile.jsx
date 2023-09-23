import React from "react";
import s from './MyProfileInfo.module.css';
import MyProfileInfo from "./MyProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";

const MyProfile = (props) => {
  if(!props.isAuth) return <Navigate to={"/login"} />
  return (
    <div className={s.content}>
      <MyProfileInfo profile={props.profile}/>
      <MyPostsContainer />
      </div>
  );
};

export default MyProfile;