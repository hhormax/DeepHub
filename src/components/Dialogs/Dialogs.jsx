import React from "react";
import s from'./Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, Formik, useFormik } from "formik";
import { withForm } from "formik-redux";

const AddMessageForm = (props) =>{

  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Enter your message"} name="newMessageBody" component={"textarea"}/>
      </div>
      <div><button type="submit">Send</button></div>
    </form>
  )
}

// const AddMessageFormRedux = withForm({
//   form: 'dialogAddMessageForm'
// })(AddMessageForm);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  }

  const onSubmit = (formData) => {
    console.log(formData);
    addNewMessage(formData);
}

  if(!props.isAuth) return <Navigate to={"/login"} />;

  return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.messages}>
              <div>{messagesElements}</div>
              <Formik initialValues={{ newMessageBody: "" }} onSubmit={onSubmit} form={'dialogs'}>
                {(formikProps) => <AddMessageForm {...formikProps} />}
              </Formik>
            </div>  
         </div>
           
  );
};



export default Dialogs;