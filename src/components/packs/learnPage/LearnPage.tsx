import React, {useEffect, useState} from "react"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {CardType} from "../../../dal/cards";
import {getCardsPack} from "../../../bll/cards-reducer";


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
    console.log('test: ', sum, rand, res)
    console.log(cards[res.id + 1])
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
        <div>
            {card.question}
           <button onClick={prevPage}>Learn</button>
            {grades.map((g, i) => (
                <button key={'grade-' + i} onClick={() => {getCard(cards)}}>{g}</button>
            ))}
            <button onClick={nextCard}>next</button>
        </div>
    )
}