import {Column} from "./Collumn/Column";
import {CardType} from "../../../dal/cards";
import {FC} from "react";
import {useDispatch} from "react-redux";
import {createCardPack, deleteCardPack} from "../../../bll/cards-reducer";

type cardsPropsType = {
    cards: Array<CardType> | null
}

export const CardsTable: FC<cardsPropsType> = ({cards}) => {

    const dispatch = useDispatch()

    const toWritePostRequest = () => {
        //dispatch(createCardPack({name: "4:20 Weeee"}))
        //dispatch(deleteCardPack("60ad015d6a09731fb469ee92"))
    }
    return (
        <table>
            <caption>Card packs</caption>
            <thead>
            <tr>
                <th>Name</th>
                <th>CardsCount</th>
                <th>Update</th>
                <th>Grade</th>
                <th>Rating</th>
                <th>
                    <button onClick={toWritePostRequest}>Add Pack</button>
                </th>
            </tr>
            </thead>
            <tbody>
            {cards?.map(el => <tr key={el._id}><Column key={el._id} current={el}/></tr>)}
            </tbody>
        </table>
    )
}