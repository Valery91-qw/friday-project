import {instance} from "./commmon/header";


export const cardsAPI = {
    getCards() {
        return instance.get(`cards/card`)
    }
}