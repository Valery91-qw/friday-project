import React, {useEffect, useRef} from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css"
import {PATH} from "../../Routes/Routes";

type PropsType = {
    showMenuHandler: () => void
    showMenu: boolean
    isInitialize: boolean
}

export const Navigation: React.FC<PropsType> = ({showMenuHandler, showMenu, isInitialize}) => {

    const dropdownRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const pageClick = (e: any) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                showMenuHandler()
            }
        }
        if (showMenu) {
            window.addEventListener('click', pageClick)
        }
        return () => {
            window.removeEventListener('click', pageClick)
        }

    }, [showMenu, showMenuHandler])

    return (
        <div ref={dropdownRef} className={style.navigationContainer}>
            {isInitialize ?
                <>
                    <NavLink className={style.link} to={PATH.NEW_PASSWORD}>New Password</NavLink>
                    <NavLink className={style.link} to={PATH.PROFILE}>Profile</NavLink>
                    <NavLink className={style.link} to={PATH.TEST_STAND}>Test stand</NavLink>
                </>
                :
                <>
                    <NavLink className={style.link} to={PATH.LOGIN}>Login</NavLink>
                    <NavLink className={style.link} to={PATH.REGISTRATION}>Registration</NavLink>
                    <NavLink className={style.link} to={PATH.TEST_STAND}>Test stand</NavLink>
                    <NavLink className={style.link} to={PATH.PASSWORD_RECOVERY}>Password recovery</NavLink>
                </>
            }
        </div>
    )
}