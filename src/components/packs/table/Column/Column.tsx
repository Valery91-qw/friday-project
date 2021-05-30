import style from "./Column.module.scss"
import {PackType} from "../../../../dal/pack";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../../bll/store";
import {PATH} from "../../../routes/Routes";
import {setCurrentPackId} from "../../../../bll/cards-reducer";

type PropsType = {
    current: PackType
    deleteMyPack: (packId: string) => void
}

export const Column = (props: PropsType) => {

    const currentId = useSelector<RootStateType, string | null>(state => state.profile.profile._id)
    const dispatch = useDispatch()

    const handleDelete = (packId: string) => {
        props.deleteMyPack(packId)
    }

    const handleMoveToCard = (packId: string) => {
        dispatch(setCurrentPackId(packId))
        console.log(packId)
    }

    return <>
        <td className={style.td}>{props.current.name}</td>
        <td className={style.td}>{props.current.cardsCount}</td>
        <td className={style.td}>{props.current.updated.substr(0, 10).replace(/-/g, " ")}</td>
        <td className={style.td}>{props.current.grade}</td>
        <td className={style.td}>{props.current.rating}</td>
        <td className={style.td}>
            <NavLink className={style.linkToCart} to={PATH.CARDS} onClick={() => handleMoveToCard(props.current._id)}>To cards</NavLink>
        </td>
        <td className={style.td}>
            {props.current.user_id === currentId ?
                <button onClick={() => handleDelete(props.current._id)}>delete</button> : null}
        </td>
    </>
}