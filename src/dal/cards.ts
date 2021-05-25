import {instance} from "./commmon/header";

export const cardsAPI = {
    getCards(queryParams?: string) {
        if(queryParams) {
            return instance.get<CardsResponseType>(`cards/pack?${queryParams}`)
        } else {
            return instance.get<CardsResponseType>(`cards/pack`)
        }
    },
    createCardPack(cardsPack: Object) {
        return instance.post(`cards/pack`, {cardsPack})
    },
    deleteCardPak(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
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