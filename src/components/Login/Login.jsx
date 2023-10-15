import React from "react";
import classnames from 'classnames'
import s from './Login.module.css'
import { Field, Formik, Form } from "formik";

const validateEmail = value =>{
    if (!value) {
        return 'Required';
    } 
    else if (!/\w/.test(value)
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
        <Form className={s.form}>
            <div className={s.loginComponent}>
                <label className={s.label}>Login</label>
                <Field className={classnames(s.field, {[s.errorInput]: errors.email && touched.email})}
                    name="email"
                    placeholder="login"

                    validate={validateEmail}/>
                {errors.email && touched.email && (<div className={s.error}>{errors.email}</div>)}
            </div>

            <div className={s.passComponent}>
                <label className={s.label}>Password</label>
                <Field className={classnames(s.field, {[s.errorInput]: errors.password && touched.password})}
                    name="password"
                    type="password"
                    placeholder="password"
                    validate={validatePassword}/>
                {errors.password && touched.password && (<div className={s.error}>{errors.password}</div>)}
            </div>
               <button className={s.button} type="submit">Send</button>
        </Form>
        )}
      </Formik>
    </div>
  );
  
  export default Login;