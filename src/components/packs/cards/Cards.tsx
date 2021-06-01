import {useDispatch, useSelector} from "react-redux";
import {getCardsPack} from "../../../bll/cards-reducer";
import {RootStateType} from "../../../bll/store";
import React from "react";

export const Cards = () => {

    const currentPackId = useSelector<RootStateType, string | null>(state => state.cards.currentPackId)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(currentPackId) dispatch(getCardsPack(currentPackId))
    },[currentPackId, dispatch] )


    return (
        <div>
            {currentPackId}
            <button>my click</button>
        </div>
    )
}