import {cardsAPI} from "../dal/cards";
import {checkAuthUser} from "./login-reducer";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";


const initialCardsState: StateType = {
    currentPackId: null
}

export const cardsReducer = (state= initialCardsState, action: ActionType) => {
    switch (action.type) {
        case "cards/SET-CURRENT-PACK-ID" :
            return {...state, currentPackId: action.packId};
        default: return state;
    }
}

export const setCurrentPackId = (packId: string) => ({type: "cards/SET-CURRENT-PACK-ID", packId})
export const setCards = (cards: any) => ({type: "cards/SET-CARDS"})

export const getCardsPack = (packId: string): ThunkType => {
    return async (dispatch, getState) => {
        try {
            const res = await cardsAPI.getCards(packId)
            console.log(res.data)
        } catch (e) {
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error in cards", error)
        }
    }
}

type SetCurrentPackIdActionType = ReturnType<typeof setCurrentPackId>
type StateType = {
    currentPackId: string | null
}
type ActionType = SetCurrentPackIdActionType

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>