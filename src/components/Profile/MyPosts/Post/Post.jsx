import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.imessage}>
        <img className={s.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI1ZZFfoilOlrVEwpgiCPe3ImRTeAsrNsUw&usqp=CAU" />
        <div className={s.message}>{props.message}</div> 
      </div>
      <div className={s.likes}>
        <div>likes: </div> 
        <div>{props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
