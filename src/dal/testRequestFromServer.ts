import {instance} from "./commmon/header";

export const testRequest = {
    testGet() {
        return instance.get<ResponseType>("ping")
    },
    testPost(frontTime: number) {
        return instance.post<ResponseType>("ping", {frontTime})
    }
}

type ResponseType = {
    backTime: Date
    frontTime: string
    info: string
    ping: number
}