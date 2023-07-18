import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
        <div>
          My posts
          <div>
            new post
          </div>
          <div className={s.posts}>
            <Post message='Hi. how are you?' likesCounts='10'/>
            <Post message='Its my first post.' likesCounts='12'/>
          </div>
        </div>
  );
};

export default MyPosts;