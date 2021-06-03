import {CardType} from "../../../../dal/cards";
import React, {FC} from "react";
import style from "./Card.module.scss"

type PropsType = {
    card: CardType
}

export const Card: FC<PropsType> = ({card}) => {
    return (
        <div className={style.cardWrapper}>
            <div>
                Question: {card.question}
            </div>
        </div>
    )
}