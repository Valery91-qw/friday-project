import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registrationUser} from "../../bll/registration-reducer";
import style from "./Registration.module.scss"
import {CustomInputMy} from "../../Common/CustomElements/Input/CostomInput";
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {RootStateType} from "../../bll/store";
import {CommonStateType, setAppError, setServerError} from "../../bll/common-reducer";

export const Registration = () => {

    const dispatch = useDispatch()
    const error = useSelector<RootStateType, CommonStateType>( state => state.common)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        let email = event.currentTarget.value
        setEmail(email)
    }
    const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        let password = event.currentTarget.value
        if(password.length <= 7) {
            dispatch(setAppError('Your password mast be > 7'));
        } else {
            dispatch(setAppError(null));
            setPassword(password)
        }
    }

    const confirmRegistration = () => {
        if (email && password) {
            dispatch(registrationUser(email, password))
            dispatch(setAppError(null))
        } else {
            dispatch(setAppError("Field is required"))
        }
    }
    
    useEffect(() => {
        return () => {
            dispatch(setAppError(null))
            dispatch(setServerError(null))
        }
    }, [dispatch])
    
    return (<>
        <div className={style.registrContainer}>
            <span className={style.registrText}>Registration</span>
            {error.serverError && <span className={style.registrError}>{error.serverError}</span>}
            <CustomInputMy placeholder='you email' onChange={handleSetEmail}/>
            <CustomInputMy type="password" placeholder='you password' onChange={handleSetPassword}/>
            <CustomButton onClick={confirmRegistration}>Registration</CustomButton>
            {error.error && <span className={style.registrError}>{error.error}</span>}
        </div>
    </>)
}