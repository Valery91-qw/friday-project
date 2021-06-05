import {instance} from "./commmon/header";


export const cardsAPI = {
    getCards(packId: string, maxCount?: number) {
        return instance.get<CardsResponseType>(`cards/card`, {params: {cardsPack_id: packId, pageCount: maxCount}})
    },
    createCard(card: Object) {
        return instance.post(`cards/card`, {card})
    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card`, {params: {id: cardId}})
    }
}
export type CardType = {
    answer: string
    answerImg: string
    answerVideo: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    questionImg: string
    questionVideo: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}

export type CardsResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}