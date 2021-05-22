import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../bll/cards-reducer";
import {RootStateType} from "../../bll/store";
import {CardType} from "../../dal/cards";


export const Cards = () => {

    const cards = useSelector<RootStateType, Array<CardType> | null>( state => state.cards.cardPacks)
    const dispatch = useDispatch()

    return (<div>
        {cards ? cards.map((el )=> <div key={el._id}>{el.user_id}</div>) : null}
        <button onClick={() => dispatch(getCards())}>Get</button>
    </div>)
}