import { Dispatch } from "redux"
import {cardsAPI, CardsResponseType, CardType} from "../dal/cards";

const initialCardsState: CardsStateType = {
    cardPacks: null,
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null,
    pageCount: null,
}

export const cardsReducer = (state = initialCardsState, action: ActionType):CardsStateType => {
    switch (action.type) {
        case "cards/SET-CARDS":return {...state, ...action.cardsData, cardPacks: [...action.cardsData.cardPacks]}
        default: return state
    }
}

const setCards = (cardsData: CardsResponseType) => ({type: "cards/SET-CARDS", cardsData} as const)

export const getCards = () => async (dispatch: Dispatch) => {
    try {
        let res = await cardsAPI.getCards()
        dispatch(setCards(res.data))
        console.log(res.data)
    } catch (e) {
        const error = await e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", error)
    }
}
type SetCardsType = ReturnType<typeof setCards>
type ActionType = SetCardsType

type CardsStateType = {
    cardPacks: Array<CardType> | null,
    cardPacksTotalCount: number | null,
    maxCardsCount: number | null,
    minCardsCount: number | null,
    page: number | null,
    pageCount: number | null
}