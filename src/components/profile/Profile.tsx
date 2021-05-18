import React from "react";
import {useDispatch} from "react-redux";
import {deauthorize} from "../../bll/login-reducer";


export const Profile = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(deauthorize())
    }

    return(<div>
        <h1>Profile</h1>
        <button onClick={logoutHandler}>logout</button>
    </div>)
}