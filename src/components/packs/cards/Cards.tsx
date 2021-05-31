import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";
import {checkAuthUser} from "../../../bll/login-reducer";

export const Cards = () => {

    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentPackId)
        dispatch(getCardsPack(currentPackId))
        return () => {
            dispatch(checkAuthUser())
        }
    },[currentPackId, dispatch] )

    return (
        <div>
            Cards
        </div>
    )
}