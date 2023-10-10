import { Field, Formik } from "formik";
import React from "react";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  console.log(props.posts);
  return(
    <form onSubmit={props.handleSubmit}>
          <div className={s.addPostBlock}>
            <div>
              <Field className={s.text} placeholder={"Your message.."} name="newPostText"
               component={Textarea} validate={maxLength10} />
            </div>
            <div>
              <button className={s.button} type="submit">Add post</button>
            </div>          
          </div>
    </form>
  )
}

const MyPosts = (props) => {
  
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
  <div className={s.postsBlock} >
     <h3>My posts</h3>
     <Formik initialValues={{ newMessageBody: "" }} onSubmit={onAddPost} form={'myposts'}>
       {(formikProps) => <MyPostsForm {...formikProps} />}
     </Formik>
     <div className={s.posts}>
       {postsElements}
     </div>
  </div> 
  );
};

MyPosts.defaultProps = {
  posts: [],
};

export default MyPosts;