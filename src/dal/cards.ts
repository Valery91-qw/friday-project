import {instance} from "./commmon/header";

export const cardsAPI = {
    getCards(queryValue?: string) {
        if(queryValue) {
            return instance.get<CardsResponseType>(`cards/pack?${queryValue}`)
        } else {
            return instance.get<CardsResponseType>(`cards/pack`)
        }
    }
}

export type CardType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    grade: number
    more_id: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_name: string
    __v: number
}

export type CardsResponseType = {
    cardPacks: Array<CardType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}