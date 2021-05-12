import {Dispatch} from "redux";
import {authenticator} from "../dal/authenticator";


export const registrationReducer = (state = {}, action: ActionType): StateType => {
    switch (action.type) {
        case "":
            return state
        default:
            return state
    }
}


export const registrationUser = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const res = await authenticator.registration(email, password)
        console.log(res)
    } catch (e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log("error", {...e})
    }
}
type StateType = any
type ActionType = any
