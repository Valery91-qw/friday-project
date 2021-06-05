import {CardType} from "../../../../dal/cards";
import React, {FC} from "react";
import style from "./Card.module.scss"
import {useDispatch} from "react-redux";
import {deleteCard} from "../../../../bll/cards-reducer";

type PropsType = {
    card: CardType
    currentPackId: string | null
}

export const Card: FC<PropsType> = ({card, currentPackId}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        if(currentPackId)
        dispatch(deleteCard(card._id, currentPackId))
    }

    return (
        <div className={style.cardWrapper}>
            <div>
                Question: {card.question}
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}