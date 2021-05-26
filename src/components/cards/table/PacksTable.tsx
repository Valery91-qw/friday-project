import {Column} from "./Column/Column";
import {PackType} from "../../../dal/pack";
import {FC} from "react";
import {Header} from "./Header/Header";
import style from "./PacksTable.module.scss"

type cardsPropsType = {
    packs: Array<PackType> | null
}

export const PacksTable: FC<cardsPropsType> = ({packs}) => {

    return (
        <table className={style.cardsTable}>
            <caption className={style.cardsTableDescription}>Card packs</caption>
            <thead className={style.cardsThead}>
                <Header/>
            </thead>
            <tbody>
                {packs?.map(el => <tr key={el._id}><Column key={el._id} current={el}/></tr>)}
            </tbody>
        </table>
    )
}