import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {registrationUser} from "../../bll/registration-reducer";
import style from "./Registration.module.scss"

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
            <input className={style.registrInput} placeholder='you email' onChange={handleSetEmail}/>
            <input className={style.registrInput} placeholder='you password' onChange={handleSetPassword}/>
            <button className={style.registrButton} onClick={confirmRegistration}>Registration</button>
            {error && <span className={style.registrError}>Please enter you Email & Password</span>}
        </div>
    </>)
}