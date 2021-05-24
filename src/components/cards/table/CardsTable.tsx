import {Column} from "./Collumn/Column";
import {CardType} from "../../../dal/cards";
import {FC} from "react";

type cardsPropsType = {
    cards: Array<CardType> | null
}

export const CardsTable: FC <cardsPropsType> = ({cards}) => {

    const toWritePostRequest = () => {

    }
    return (
        <table>
            <caption>Cards pacs</caption>
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
            {cards?.map(el => <tr key={el._id}> <Column current={el} /></tr>)}
        </table>
    )
}