import React, {useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import {PATH} from "../../Routes/Routes";
import {testRequest} from "../../../dal/testRequestFromServer";

type PropsType = {
    showMenuHandler: () => void
    showMenu: boolean
}

export const Navigation: React.FC<PropsType> = ({showMenuHandler, showMenu}) => {

    const dropdownRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const pageClick = (e: any) => {
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                showMenuHandler()
            }
        }
        testRequest.testGet().then(res => console.log(res))
        if(showMenu) {
            window.addEventListener('click', pageClick)
        }
        return () => {
            window.removeEventListener('click', pageClick)
        }

    }, [showMenu, showMenuHandler])

    return (
        <div ref={dropdownRef} className={style.navigationContainer}>
            <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
            <NavLink className={style.link} to={PATH.NEW_PASSWORD}>New Password</NavLink>
            <NavLink className={style.link} to={PATH.PASSWORD_RECOVERY}>Password recovery</NavLink>
            <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
            <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
            <NavLink className={style.link} to={PATH.TEST_STAND}>Test stand</NavLink>
        </div>
    )
}