import {CardType} from "../../../../dal/cards";
import React, {FC} from "react";
import style from "./Card.module.scss"
import {useDispatch} from "react-redux";
import {deleteCard} from "../../../../bll/cards-reducer";

type PropsType = {
    card: CardType
    currentPackId: string | null
    currentUserId: string | null
}

export const Card: FC<PropsType> = ({card, currentPackId, currentUserId}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        if(currentPackId)
        dispatch(deleteCard(card._id, currentPackId))
    }

    return (
        <div className={style.cardWrapper}>
            <div>
                Question: {card.question}
                {currentUserId === card.user_id ? <button onClick={handleDelete}>delete</button> : null}
            </div>
        </div>
    )
}