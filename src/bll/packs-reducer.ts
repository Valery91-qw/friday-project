import { Dispatch } from "redux"
import {packsAPI, CardsResponseType, PackType} from "../dal/pack";
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

export const packsReducer = (state = initialCardsState, action: ActionType):CardsStateType => {
    switch (action.type) {
        case "packs/SET-CARDS":return {...state, ...action.cardsData, cardPacks: [...action.cardsData.cardPacks]}
        default: return state
    }
}

const setCardPacks = (cardsData: CardsResponseType) => ({type: "packs/SET-CARDS", cardsData} as const)

export const getPacks = (queryParams?: string) => async (dispatch: Dispatch) => {
    try {
        let res = await packsAPI.getPacks(queryParams)
        dispatch(setCardPacks(res.data))
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
            await packsAPI.createCardPack(cardsPack)
            await dispatch(getPacks())
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
            await packsAPI.deleteCardPak(packId);
            await dispatch(getPacks())
            await dispatch(checkAuthUser())
        } catch (e) {
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error", error)
        }
    }
}

type SetCardsType = ReturnType<typeof setCardPacks>
type ActionType = SetCardsType

type CardsStateType = {
    cardPacks: Array<PackType> | null,
    cardPacksTotalCount: number | null,
    maxCardsCount: number | null,
    minCardsCount: number | null,
    page: number | null,
    pageCount: number | null
}

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>