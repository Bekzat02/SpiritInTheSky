import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://angular.io/assets/images/logos/angular/angular_solidBlack.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}  <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;