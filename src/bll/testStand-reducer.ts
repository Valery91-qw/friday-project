
type StateType = any

type ActionType = any

export const testStandReducer = (state = {}, action: ActionType):StateType => {
    switch (action.type) {
        case "": return state
        default: return state
    }
}