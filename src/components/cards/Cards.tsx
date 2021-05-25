import {useDispatch, useSelector} from "react-redux";
import {getCards} from "../../bll/cards-reducer";
import {RootStateType} from "../../bll/store";
import {CardType} from "../../dal/cards";
import style from "./Cards.module.scss"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {CardsTable} from "./table/CardsTable";
import {Pagination} from "../../Common/Pagination/Pagination";
import {useEffect} from "react";
import {checkAuthUser} from "../../bll/login-reducer";

export const Cards = () => {

    const cards = useSelector<RootStateType, Array<CardType> | null>(state => state.cards.cardPacks)
    const totalPackCount = useSelector<RootStateType, number| null>(state => state.cards.cardPacksTotalCount)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(checkAuthUser())
        }
    },[dispatch])
    return (<div className={style.cardsTable}>
        <CardsTable cards={cards}/>
        <CustomButton onClick={() => dispatch(getCards())}>Get</CustomButton>
        <Pagination totalPackCount={totalPackCount} />
    </div>)
}
