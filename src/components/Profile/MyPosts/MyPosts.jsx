import { Field, Formik } from "formik";
import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) {
    return `Max length is ${maxLength}`;
  }
  return undefined;
}

const MyPostsForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
          <div className={s.addPostBlock}>
            <div>
              <Field 
                className={s.text} 
                placeholder={"Your message.."} 
                name="newPostText"
                component="textarea" 
                validate={maxLengthCreator(100)}
                />
            </div>
            <div>
              <button className={s.button} type="submit">Add post</button>
            </div>          
          </div>
    </form>
  )
}

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  let onAddPost = (values, { resetForm }) => {
    if (values.newPostText) { 
      props.addPost(values.newPostText);
      resetForm(); 
    }
  }

  return (
  <div className={s.postsBlock}>
    <h3>My posts</h3>
    <Formik 
        initialValues={{ 
          newPostText: "" 
        }} 
        onSubmit={onAddPost} 
        form={'myposts'}>
        
        {(formikProps) => <MyPostsForm {...formikProps} />}
     </Formik>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div> 
  );
})

MyPosts.defaultProps = {
  posts: [],
};

export default MyPosts;