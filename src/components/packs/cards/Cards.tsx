import {useDispatch, useSelector} from "react-redux";
import {createCard, getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";
import React, {useEffect, useState} from "react";
import {CardType} from "../../../dal/cards";
import {CustomButton} from "../../../Common/CustomElements/Button/CustomButton";
import style from "./Cards.module.scss"
import {Card} from "./card/Card";
import {ModalWindow} from "../../../Common/Modal/ModalWindow";
import {CustomInputMy} from "../../../Common/CustomElements/Input/CostomInput";
import { NavLink } from "react-router-dom";
import {PATH} from "../../routes/Routes";

export const Cards = () => {

    const currentUserId = useSelector<RootStateType, string | null>(state => state.profile.profile._id)
    const currentUserPackId = useSelector<RootStateType, string | null>(state => state.cards.cardsData.packUserId)

    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const cards = useSelector<RootStateType, Array<CardType> | null>(state => state.cards.cards)
    const totalAmountCards = useSelector<RootStateType, number | null>(state => state.cards.cardsData.cardsTotalCount)
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState('')


    useEffect(() => {
        if(currentPackId) dispatch(getCardsPack(currentPackId))
    },[currentPackId, dispatch] )


    const getTotalCards = () => {
        if (currentPackId && totalAmountCards)
        dispatch(getCardsPack(currentPackId, totalAmountCards))
    }

    const handleQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.currentTarget.value)
    }
    const handleAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.currentTarget.value)
    }
    const showModalHandler = () => {
        setShowModal(!showModal)
    }
    const handleCreateCard = () => {
        if(currentPackId)
        dispatch(createCard({cardsPack_id: currentPackId, question, answer} , currentPackId))
        setQuestion('');
        setAnswer('')
        setShowModal(false)
    }

    return (
        <div className={style.cardsWrapper}>
            <span className={style.cardsTitle}>Cards
                {currentUserId === currentUserPackId ? <button onClick={showModalHandler}>add card</button> : null}
                <NavLink className={style.cardsLink} to={PATH.LEARNPAGE}>Learn</NavLink>
            </span>
            {showModal ? <ModalWindow title="create card" closeCallback={showModalHandler} >
                            <CustomInputMy onChange={handleQuestion} placeholder="question" />
                            <CustomInputMy onChange={handleAnswer} placeholder="answer"/>
                <CustomButton onClick={handleCreateCard}>create card</CustomButton>
            </ModalWindow> : null}

            {cards ? cards.map(card => <Card currentPackId={currentPackId} key={card._id} card={card}/>) : null}
            <CustomButton onClick={getTotalCards}>get total cards</CustomButton>
        </div>
    )
}