import React from "react";
import classnames from 'classnames'
import s from './Login.module.css'
import { Field, Formik, Form } from "formik";

const validateEmail = value =>{
    if (!value) {
        return 'Required';
    } 
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
        return 'Invalid email address';
    }
}

const validatePassword = value =>{
    if (!value) {
        return 'Required';
    } 
}

const Login = () => (
    <div>
      <Formik
        initialValues={{ 
            email: '', 
            password: '' 
        }}

        onSubmit={values => {
            console.log('submit', values);
        }}
      >
        {({ errors, touched }) => (
        <Form>
            <label className={classnames(s.label, {[s.errorLabel]: errors.email && touched.email})}>Email</label>
            <Field className={classnames(s.field, {[s.errorInput]: errors.email && touched.email})}
                name="email"
                validate={validateEmail}
                />
            {errors.email && touched.email && (<div className={s.error}>{errors.email}</div>)}

            <label className={classnames(s.label, {[s.errorLabel]: errors.password && touched.password})}>Password</label>
            <Field className={classnames(s.field, {[s.errorInput]: errors.password && touched.password})}
                name="password"
                type="password"
                validate={validatePassword}
                />
            {errors.email && touched.email && (<div className={s.error}>{errors.email}</div>)}
               <button className={s.button} type="submit">Send</button>
        </Form>
        )}
      </Formik>
    </div>
  );
  
  export default Login;