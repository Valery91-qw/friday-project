import { Dispatch } from "redux"
import {cardsAPI, CardsResponseType, CardType} from "../dal/cards";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";
import {checkAuthUser} from "./login-reducer";

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
export const createCardPack = (cardsPack: any):ThunkType => {
   return async (dispatch, getState: () => RootStateType) => {
        try {
            await cardsAPI.createCardPack(cardsPack)
            await dispatch(getCards())
            await dispatch(checkAuthUser())
        } catch (e) {
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error", error)
        }
    }
}
export const deleteCardPack = (packId: string):ThunkType => {
    return async (dispatch, getState) => {
        try {
            await cardsAPI.deleteCardPak(packId);
            await dispatch(getCards())
            await dispatch(checkAuthUser())
        } catch (e) {
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error", error)
        }
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

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>