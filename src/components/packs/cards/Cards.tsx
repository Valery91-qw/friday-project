import {useDispatch, useSelector} from "react-redux";
import {getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";
import React, {useEffect} from "react";
import {CardType} from "../../../dal/cards";

export const Cards = () => {

    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const cards = useSelector<RootStateType, Array<CardType> | null>(state => state.cards.cards)
    const totalAmountCards = useSelector<RootStateType, number | null>(state => state.cards.cardsData.cardsTotalCount)
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentPackId) dispatch(getCardsPack(currentPackId))
    },[currentPackId, dispatch] )

    const getTotalCards = () => {
        if (currentPackId && totalAmountCards)
        dispatch(getCardsPack(currentPackId, totalAmountCards))
        console.log(cards)
    }

    return (
        <div>
            {currentPackId}
            <button onClick={getTotalCards}>my click</button>
            {
                cards ? cards.map(el => <div key={el._id}>{el.answer}</div>) : null
            }
        </div>
    )
}