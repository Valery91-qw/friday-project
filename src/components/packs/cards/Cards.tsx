import {useDispatch, useSelector} from "react-redux";
import {getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";
import React, {useEffect} from "react";
import {CardType} from "../../../dal/cards";
import {CustomButton} from "../../../Common/CustomElements/Button/CustomButton";
import style from "./Cards.module.scss"
import {Card} from "./card/Card";

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
    }

    return (
        <div className={style.cardsWrapper}>
            <span className={style.cardsTitle}>Cards</span>
            {cards ? cards.map(card => <Card card={card}/>) : ""}
            <CustomButton onClick={getTotalCards}>get total cards</CustomButton>
        </div>
    )
}