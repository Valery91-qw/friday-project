import React, { useState} from "react";
import style from "./Login.module.scss"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {authorize} from "../../bll/login-reducer";
import {CustomInputMy} from "../../Common/CustomElements/Input/CostomInput";
import {RootStateType} from "../../bll/store";
import {setAppError} from "../../bll/common-reducer";



export const Login = () => {

    const error = useSelector<RootStateType, string | null>( state => state.common.error)
    const dispatch = useDispatch()

    const [email, setEmail] = useState("valerykrvnk@gmail.com");
    const [password, setPassword] = useState("89898989");
    const [rememberMe, setRememberMe] = useState(false);

    const takeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        dispatch(setAppError(null))
    }

    const takePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        dispatch(setAppError(null))
    }

    const takeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.currentTarget.checked)
        dispatch(setAppError(null))
    }

    const confirmAuthorize = () => {
        if (email && password) {
            dispatch(authorize(email, password, rememberMe))
        } else {
            dispatch(setAppError("Field is required"))
        }
    }
    return (
        <div className={style.loginContainer}>
            <span className={style.loginTitle}>Authorize</span>
            <CustomInputMy placeholder="Email" onChange={takeEmail}/>
            <CustomInputMy type='password' placeholder="Password" onChange={takePassword}/>
            <label>
                <input type="checkbox" onChange={takeConfirm} checked={rememberMe}/>
                Remember me
            </label>
            <CustomButton onClick={confirmAuthorize}>Login</CustomButton>
            {error && <span className={style.loginError}>{error}</span>}
        </div>
    )
}
