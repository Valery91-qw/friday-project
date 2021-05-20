
const InitialCommonState: CommonStateType = {
    error: null,
    serverError: null
}

export const commonReducer = (state = InitialCommonState, action: ActionType):CommonStateType => {
    switch (action.type) {
        case "common/SET-APP-ERROR": return {...state, error: action.appError}
        case "common/SET-SERVER-ERROR": return {...state, serverError: action.serverError}
        default: return state
    }
}

export const setAppError = (appError: string | null) => ({type: "common/SET-APP-ERROR", appError} as const);
export const setServerError = (serverError: string | null) => ({type: "common/SET-SERVER-ERROR", serverError} as const);

type SetAppErrorType = ReturnType<typeof setAppError>
type SetServerErrorType = ReturnType<typeof setServerError>
type ActionType = SetAppErrorType | SetServerErrorType

export type CommonStateType = {
    error: string | null
    serverError: string | null
}