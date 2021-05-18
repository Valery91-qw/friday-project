import React, { useState} from "react";
import style from "./Login.module.scss"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {useDispatch} from "react-redux";
import {authorize} from "../../bll/login-reducer";
import {CustomInputMy} from "../../Common/CustomElements/Input/CostomInput";



export const Login = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(false)

    const takeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        setError(false)
    }

    const takePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        setError(false)
    }

    const takeConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.currentTarget.checked)
        setError(false)
    }

    const confirmAuthorize = () => {
        if (email && password) {
            dispatch(authorize(email, password, rememberMe))
        } else {
            setError(true)
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
            {error && <span>Error</span>}
        </div>
    )
}
