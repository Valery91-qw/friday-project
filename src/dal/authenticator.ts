import {instance} from "./commmon/header";


export const authenticator = {
    registration(email: string, password: string) {
        return instance.post<RegistrationType>("auth/register",{email, password})
    }
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