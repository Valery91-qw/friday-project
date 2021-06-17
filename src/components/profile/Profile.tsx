import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser, deauthorize} from "../../bll/login-reducer";
import {RootStateType} from "../../bll/store";
import {ProfileUsersType, updateCurrentUser} from "../../bll/profile-reducer";
import style from "./Profile.module.scss"
import unloadAvatar from "../../img/unloadAvatar.jpg"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import { useHistory } from "react-router-dom";
import {PATH} from "../routes/Routes";
import {ModalWindow} from "../../Common/Modal/ModalWindow";
import {CustomInputMy} from "../../Common/CustomElements/Input/CostomInput";


export const Profile = () => {

    const isInitialize = useSelector<RootStateType, boolean>(state => state.profile.isInitialize)
    const profileData = useSelector<RootStateType, ProfileUsersType>(state => state.profile.profile)
    const dispatch = useDispatch()
    const history = useHistory();

    const [showModal, setShowModal] = useState(false)
    const [url, setUrl] = useState("")
    const [visible, setVisible] = useState(false);
    const [newName, setNewName] = useState("")

    const closeModal = () => {
        setShowModal(false)
        if(url.indexOf('https') !== -1) {
            dispatch(updateCurrentUser(undefined, url))

        }
        setUrl('')
    }
    const openModal = () => {
        setShowModal(true)
    }
    const urlAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        setUrl(e.currentTarget.value)
    }

    const logoutHandler = () => {
        dispatch(deauthorize())
        history.push(PATH.LOGIN)
    }

    const editMode = () => {
        setVisible(!visible)
        if(newName.length > 0) {
            dispatch(updateCurrentUser(newName))
        }
    }

    const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.currentTarget.value);
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
                <button onClick={openModal}>change avatar</button>
                <img className={style.descriptionAvatar} alt={"Avatar"} src={profileData.avatar ? profileData.avatar : unloadAvatar}/>
                <div>
                    Email:
                    <span> {profileData.email}</span>
                </div>
                <div>
                    Name:
                    {visible
                        ? <input onBlur={editMode} autoFocus placeholder={profileData.name} onChange={(e) => setName(e)}/>
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
            {showModal ? <ModalWindow title="Change avatar" closeCallback={closeModal}>
                <CustomInputMy onChange={urlAvatar} placeholder="insert URL" />
                <CustomButton onClick={closeModal}>change Avatar</CustomButton>
            </ModalWindow> : null}
        </div>
    )
}