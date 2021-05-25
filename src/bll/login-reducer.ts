import {Dispatch} from "redux";
import {authenticator} from "../dal/authenticator";
import {isInitialize, setUserAuthData} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";
//valerykrvnk@gmail.com
//89898989


export const loginReducer = (state = {}, action: ActionType):StateType => {
    switch (action.type) {
        case "":return state
        default: return state
    }
}


export const authorize = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        let res = await authenticator.authorization(email, password, rememberMe)
        dispatch(setUserAuthData(res.data))
        dispatch(isInitialize(true))
    } catch (e) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const error = await e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", {...e})
    }
}
export const checkAuthUser = ():ThunkType => {
    return async (dispatch, getState: () => RootStateType) => {
        try {
            let res = await authenticator.checkAuthorizeUser()
            dispatch(setUserAuthData(res.data))
            dispatch(isInitialize(true))
        } catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            await dispatch(deauthorize())
            const error = await e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            console.log("error", {...e})
        }
    }
}
export const deauthorize = () => async (dispatch: Dispatch) => {
     try {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         let res = await authenticator.deauthorize()
         dispatch(isInitialize(false))
     } catch (e) {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const error = await e.response
             ? e.response.data.error
             : (e.message + ', more details in the console');
         console.log("error", {...e})
     }
}

type ActionType = any
type StateType = any

type ThunkType = ThunkAction<void, RootStateType, unknown, ActionType>