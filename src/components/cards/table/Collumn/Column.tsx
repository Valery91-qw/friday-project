import style from "../../Cards.module.scss"
import {CardType} from "../../../../dal/cards";

type PropsType = {
    current: CardType
}

export const Column = (props: PropsType) => {

    return <>
    <td className={style.td}>{props.current.name}</td>
    <td className={style.td}>{props.current.cardsCount}</td>
    <td className={style.td}>{props.current.updated.substr(0,10).replace(/-/g, " ")}</td>
    <td className={style.td}>{props.current.grade}</td>
    <td className={style.td}>{props.current.rating}</td>
    </>
}