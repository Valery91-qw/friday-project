import style from "./Column.module.scss"
import {PackType} from "../../../../dal/pack";
import React from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
    current: PackType
}

export const Column = (props: PropsType) => {

    return <>
    <td className={style.td}>{props.current.name}</td>
    <td className={style.td}>{props.current.cardsCount}</td>
    <td className={style.td}>{props.current.updated.substr(0,10).replace(/-/g, " ")}</td>
    <td className={style.td}>{props.current.grade}</td>
    <td className={style.td}>{props.current.rating}</td>
    <td className={style.td}>
        <NavLink className={style.linkToCart} to={''}>Pack</NavLink>
    </td>
    </>
}