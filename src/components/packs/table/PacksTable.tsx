import {Column} from "./Column/Column";
import {PackType} from "../../../dal/pack";
import {FC} from "react";
import {Header} from "./Header/Header";
import style from "./PacksTable.module.scss"
import {useDispatch} from "react-redux";
import {deleteCardPack} from "../../../bll/packs-reducer";

type cardsPropsType = {
    packs: Array<PackType> | null
}

export const PacksTable: FC<cardsPropsType> = ({packs}) => {

    const dispatch = useDispatch()

    const deleteMyPack = (packId: string) => {
        dispatch(deleteCardPack(packId))
    }

    return (
        <table className={style.cardsTable}>
            <caption className={style.cardsTableDescription}>Packs</caption>
            <thead className={style.cardsThead}>
                <Header/>
            </thead>
            <tbody>
                {packs?.map((el, i) =><tr key={el._id}>
                    <Column key={el._id} current={el} deleteMyPack={deleteMyPack}/>
                </tr>)}
            </tbody>
        </table>
    )
}