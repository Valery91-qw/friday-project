import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import {PATH} from "../../Routes/Routes";

type PropsType = {
    showMenuHandler: () => void
}

export const Navigation: React.FC<PropsType> = (props) => {
    return (
        <div onClick={props.showMenuHandler} className={style.navigationContainer}>
            <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
            <NavLink className={style.link} to={PATH.NEW_PASSWORD}>New Password</NavLink>
            <NavLink className={style.link} to={PATH.PASSWORD_RECOVERY}>Password recovery</NavLink>
            <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
            <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            <NavLink className={style.link} to={PATH.TEST_STAND}>Test stand</NavLink>
        </div>
    )
}