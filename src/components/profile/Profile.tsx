import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser, deauthorize} from "../../bll/login-reducer";
import {RootStateType} from "../../bll/store";
import {ProfileUsersType} from "../../bll/profile-reducer";
import style from "./Profile.module.scss"
import unloadAvatar from "../../img/unloadAvatar.jpg"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import { useHistory } from "react-router-dom";
import {PATH} from "../routes/Routes";


export const Profile = () => {

    const isInitialize = useSelector<RootStateType, boolean>(state => state.profile.isInitialize)
    const profileData = useSelector<RootStateType, ProfileUsersType>(state => state.profile.profile)
    const dispatch = useDispatch()
    const history = useHistory();

    const [visible, setVisible] = useState(false);


    const logoutHandler = () => {
        dispatch(deauthorize())
        history.push(PATH.LOGIN)
    }

    const editMode = () => {
        setVisible(!visible)
        console.log(visible)
    }


    useEffect(() => {
        dispatch(checkAuthUser())
    }, [dispatch])

    if (!isInitialize) {
        return <span>something Wrong</span>
    }
    return (
        <div className={style.profileContiner}>
            <div className={style.profileHeader}>
                <span className={style.profileTitle}>Profile</span>
                <CustomButton onClick={logoutHandler}>logout</CustomButton>
            </div>
            <div className={style.profileDescription}>
                <img className={style.descriptionAvatar} alt={"Avatar"} src={unloadAvatar}/>
                <div>
                    Email:
                    <span> {profileData.email}</span>
                </div>
                <div>
                    Name:
                    {visible
                        ? <input onBlur={editMode} autoFocus placeholder={profileData.name}/>
                        : <span onDoubleClick={editMode}> {profileData.name}</span>}
                </div>
                <div>
                    IsVerified:
                    <span>{!profileData.verified ? " false" : profileData.verified}</span>
                </div>
                <div>
                    Public Curds:
                    <span> {profileData.publicCardPacksCount}</span>
                </div>
            </div>
        </div>
    )
}