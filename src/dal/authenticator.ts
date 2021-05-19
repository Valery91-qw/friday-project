import {instance} from "./commmon/header";


export const authenticator = {
    registration(email: string, password: string) {
        return instance.post<RegistrationType>("auth/register",{email, password})
    },
    authorization(email: string, password: string, rememberMe: boolean) {
        return instance.post<AuthorizeUserDataType>("auth/login",{email, password, rememberMe})
    },
    checkAuthorizeUser() {
        return instance.post<AuthorizeUserDataType>("auth/me",{})
    },
    deauthorize() {
        return instance.delete<DeathorizeType>("auth/me", {})
    }
}

type AuthorizeUserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number

    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean

    error?: string
}

type RegistrationType = {
    addedUser: {
        created: Date
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        rememberMe: boolean
        updated: Date
        verified: boolean
        __v: number
        _id: string
    }
    error?: string
}
type DeathorizeType = {
    info: string,
    error?: string
}