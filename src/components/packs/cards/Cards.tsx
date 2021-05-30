import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";

export const Cards = () => {
    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentPackId)
        dispatch(getCardsPack(currentPackId))
    }, )

    return (
        <div>
            Cards
        </div>
    )
}