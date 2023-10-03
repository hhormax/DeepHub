import { withForm } from "formik-redux";
import { Field, Formik } from "formik";
import React from "react";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name="login" component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name="password" component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name="rememberMe" component={"input"} /> remember me
            </div>
            <div>
            <button type="submit">Login</button>
            </div>
        </form>
    )
}

const FormikLoginForm = withForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <Formik initialValues={{ login: "", password: "", rememberMe: false }} onSubmit={onSubmit}>
        {(formikProps) => <LoginForm {...formikProps} />}
      </Formik>
    </div>
}

export default Login;