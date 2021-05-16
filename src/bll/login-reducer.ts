import {Dispatch} from "redux";
import {authenticator} from "../dal/authenticator";
import {setUserAuthData} from "./profile-reducer";
//valerykrvnk@gmail.com
//89898989

type StateType = any

type ActionType = any

export const loginReducer = (state = {}, action: ActionType):StateType => {
    switch (action.type) {
        case "": return state
        default: return state
    }
}

export const authorize = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
        let res = await authenticator.authorization(email, password, rememberMe)
        console.log(res.data)
        dispatch(setUserAuthData(res.data))
    }
    catch (e) {
        const error = await e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", {...e})
    }
}