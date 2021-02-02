


type StateType = any

type ActionType = any

export const newPasswordReducer = (state = {}, action: ActionType):StateType => {
    switch (action.type) {
        case "": return state
        default: return state
    }
}