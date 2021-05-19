const InitialState: ProfileStateType = {
    profile: {
        _id: null,
        email: null,
        name: null,
        avatar: undefined,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        isAdmin: false,
        verified: false,
        rememberMe: false,
    },
    isInitialize: false,
}

type ActionType = SetUserAuthDataType | IsInitializeType

export const profileReducer = (state = InitialState, action: ActionType):ProfileStateType => {
    switch (action.type) {
        case "profile/SET-USER-AUTH-DATA": return {...state, profile: {...action.userData}}
        case "profile/SET-INITIALIZE": return {...state, isInitialize: action.initialize}
        default: return state
    }
}

export const setUserAuthData = (userData: UserDataType) => ({type: "profile/SET-USER-AUTH-DATA", userData} as const)
export const isInitialize = (initialize: boolean) => ({type: "profile/SET-INITIALIZE", initialize} as const)

export type UserDataType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
}
export type ProfileUsersType = {
    _id: string | null,
    email: string | null,
    name: string | null,
    avatar?: string,
    publicCardPacksCount: number | null,
    created: Date | null,
    updated: Date | null,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
}

export type ProfileStateType = {
    profile: ProfileUsersType
    isInitialize: boolean
}

type SetUserAuthDataType = ReturnType<typeof setUserAuthData>
type IsInitializeType = ReturnType<typeof isInitialize>