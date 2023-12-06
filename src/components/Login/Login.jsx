import React from "react";
import classnames from 'classnames'
import styled from 'styled-components';
import s from './Login.module.css'
import { Field, Formik, Form } from "formik";
import {logiN} from '../../redux/auth-reducer'
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


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

const validateCaptcha = value =>{
    if (!value) {
        return 'Required';
    } 
    else if (!/\w/.test(value)
    ) {
        return 'Invalid input';
    }
}

const Login = (props) => {
    {if(props.isAuth) return <Navigate to="/myProfile" />}
    return (
        <div> 
            <Formik
                initialValues={{ 
                    email: '', 
                    password: '',
                    rememberMe: false,
                    captcha: null
                }}

                onSubmit={values => {
                    props.logiN(values.email, values.password, values.rememberMe, values.captcha)
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
                    <div>
                        <Field
                            className={s.field}
                            name="captcha"
                            placeholder="input captcha"
                            validate={validateCaptcha}/>
                    </div>
                    <button className={s.button} type="submit">Login</button>
                </Form>
                )}
            </Formik>
        </div>
    )
};
  
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
      }
    
}

  export default connect(mapStateToProps, {logiN})(Login);