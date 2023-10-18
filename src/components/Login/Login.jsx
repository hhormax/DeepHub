import React from "react";
import classnames from 'classnames'
import styled from 'styled-components';
import s from './Login.module.css'
import { Field, Formik, Form } from "formik";
import {logiN} from '../../redux/auth-reducer'
import { connect } from "react-redux";


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

const Login = (props) => (
    <div>
      <Formik
        initialValues={{ 
            email: '', 
            password: '',
            rememberMe: false
        }}

        onSubmit={values => {
            console.log(values);
            props.logiN(values.email, values.password, values.rememberMe)
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

            <div className={s.rememberMe}>
                <label className={s.label}>Remember me</label>
                <Field 
                    className={s.box}
                    name="rememberMe"
                    type="checkbox"
                    />
            </div>
               <button className={s.button} type="submit">Login</button>
        </Form>
        )}
      </Formik>
    </div>
  );
  
  export default connect(null, {logiN})(Login);