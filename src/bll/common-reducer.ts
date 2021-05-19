


const InitialCommonState: StateType = {
    error: null
}

export const commonReducer = (state = InitialCommonState, action: ActionType):StateType => {
    switch (action.type) {
        case "common/SET-APP-ERROR": return {...state, error: action.appError}
        default: return state
    }
}

export const setAppError = (appError: string | null) => ({type: "common/SET-APP-ERROR", appError} as const);

type SetAppErrorType = ReturnType<typeof setAppError>
type ActionType = SetAppErrorType

type StateType = {
    error: string | null
}