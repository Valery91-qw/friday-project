import {Dispatch} from "redux";
import {authenticator} from "../dal/authenticator";
import {isInitialize, setUserAuthData} from "./profile-reducer";
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
        console.log(res.data)
        dispatch(setUserAuthData(res.data))
        dispatch(isInitialize(true))
    } catch (e) {
        const error = await e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", {...e})
    }
}
export const checkAuthUser = () => async (dispatch: Dispatch) => {
    try {
        let res = await authenticator.checkAuthorizeUser()
        console.log(res.data)
        dispatch(setUserAuthData(res.data))
        dispatch(isInitialize(true))
    } catch (e) {
        const error = await e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", {...e})
    }
}
export const deauthorize = () => async (dispatch: Dispatch) => {
     try {
         let res = authenticator.deauthorize()
         console.log(res)
         dispatch(isInitialize(false))
     } catch (e) {
         const error = await e.response
             ? e.response.data.error
             : (e.message + ', more details in the console');
         console.log("error", {...e})
     }
}

type ActionType = any
type StateType = any