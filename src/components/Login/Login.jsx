import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email","email",[required],Input)}
            {createField("Password","password",[required],Input,{type:"password"})}
            {createField(null,"rememberMe",[],Input,{type: "checkbox"},"remember me")}

            {props.error &&
            <div className={style.formSummaryError}>
                {props.error}
            </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {

    const onSubmit = (loginForm) => {
        props.login(loginForm.email, loginForm.password, loginForm.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);