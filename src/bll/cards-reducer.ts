import {cardsAPI} from "../dal/cards";
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

export const setCurrentPackId = (packId: string) => ({type: "cards/SET-CURRENT-PACK-ID", packId} as const)
export const setDataCards = (cardsData: any) => ({type: "cards/SET-DATA-CARDS", cardsData} as const)

export const getCardsPack = (packId: string): ThunkType => {
    return async (dispatch, getState: () => RootStateType) => {
        try {
            let res = await cardsAPI.getCards(packId);
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
}
type ActionType = SetCurrentPackIdActionType

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>