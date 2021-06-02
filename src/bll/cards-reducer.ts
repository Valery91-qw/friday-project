import {cardsAPI, CardsResponseType, CardType} from "../dal/cards";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";

const initialCardsState: StateType = {
    currentPackId: null,
    cardsData: {
        cardsTotalCount: null,
        page: null,
        maxGrade: null,
        pageCount: null,
        packUserId: null,
        minGrade: null,
    },
    cards : null
}

export const cardsReducer = (state= initialCardsState, action: ActionType) => {
    switch (action.type) {
        case "cards/SET-CURRENT-PACK-ID" :
            return {...state, currentPackId: action.packId};
        case "cards/SET-DATA-CARDS":
            return {...state, cardsData: {...action.cardsData}, cards: [...action.cardsData.cards]}
        default: return state;
    }
}

export const setCurrentPackId = (packId: string) => ({type: "cards/SET-CURRENT-PACK-ID", packId} as const)
export const setDataCards = (cardsData: CardsResponseType) => ({type: "cards/SET-DATA-CARDS", cardsData} as const)

export const getCardsPack = (packId: string, cardsCount?: number): ThunkType => {
    return async (dispatch, getState: () => RootStateType) => {
        try {
             const res = await cardsAPI.getCards(packId, cardsCount);
             dispatch(setDataCards(res.data))
        } catch (e) {
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error in cards", error)
        }
    }
}

type SetCurrentPackIdActionType = ReturnType<typeof setCurrentPackId>
type SetDataCardsActionType = ReturnType<typeof setDataCards>
type StateType = {
    currentPackId: string | null
    cardsData: {
        cardsTotalCount: number | null
        maxGrade: number | null
        minGrade: number | null
        page: number | null
        pageCount: number | null
        packUserId: string | null
    }
    cards: Array<CardType> | null
}
type ActionType = SetCurrentPackIdActionType | SetDataCardsActionType

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>