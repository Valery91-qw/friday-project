import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {registrationUser} from "../../bll/registration-reducer";
import style from "./Registration.module.scss"
import {CustomInputMy} from "../../Common/CustomElements/Input/CostomInput";
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";

export const Registration = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        setError(false)
    }
    const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        setError(false)
    }

    const confirmRegistration = () => {
        if (email && password) {
            dispatch(registrationUser(email, password))
            setError(false)
        } else {
            setError(true)
        }
    }

    return (<>
        <div className={style.registrContainer}>
            <span className={style.registrText}>Registration</span>
            <CustomInputMy placeholder='you email' onChange={handleSetEmail}/>
            <CustomInputMy placeholder='you password' onChange={handleSetPassword}/>
            <CustomButton onClick={confirmRegistration}>Registration</CustomButton>
            {error && <span className={style.registrError}>Please enter you Email & Password</span>}
        </div>
    </>)
}