import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {CardType} from "../../../dal/cards";
import {getCardsPack, setCardGrade} from "../../../bll/cards-reducer";
import style from "./LearnPage.module.scss"


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: Array<CardType> | null) => {
    if(cards === null) return ;
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    return cards[res.id + 1];
}

export const LearnPage = () => {

    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const totalAmountCards = useSelector<RootStateType, number | null>(state => state.cards.cardsData.cardsTotalCount)
    
    const cards = useSelector<RootStateType, Array<CardType> | null>(state => state.cards.cards)
    const dispatch = useDispatch()

    const [card, setCard] = useState<any>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,

        type: '',
        rating: 0,
        more_id: '',

        created: '',
        updated: '',
    })
    const [first, setFirst] = useState(true)
    
    const history = useHistory()

    const prevPage = () => {
        history.goBack()
    }

    const nextCard = () => {
        setCard(getCard(cards));
        console.log(card)
    }

    const setGrade = (i: number,) => {
        dispatch(setCardGrade(i, card._id))
    }

    useEffect(() => {
        if(first) {
            if (currentPackId && totalAmountCards)
                dispatch(getCardsPack(currentPackId, totalAmountCards));
            setFirst(false);
        }
        setCard(getCard(cards))
        
    }, [cards, currentPackId, dispatch, first, totalAmountCards])

    return (
        <div className={style.learnPageWrapper}>
            <span className={style.learnPageQuestion}>{card.question}</span>
            <button className={style.backButton} onClick={prevPage}>Back to pack</button>
            <div className={style.gradeButton}>
            {grades.map((g, i) => (
                <button key={'grade-' + i} onClick={() => {setGrade(i + 1)}}>{g}</button>
            ))}
            </div>
            <button className={style.nextButton} onClick={nextCard}>next</button>
            <span className={style.answer}>{card.answer}</span>
        </div>
    )
}