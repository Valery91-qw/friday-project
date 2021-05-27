import {Column} from "./Column/Column";
import {PackType} from "../../../dal/pack";
import {FC} from "react";
import {Header} from "./Header/Header";
import style from "./PacksTable.module.scss"
import {useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";

type cardsPropsType = {
    packs: Array<PackType> | null
}

export const PacksTable: FC<cardsPropsType> = ({packs}) => {

    const currentId = useSelector<RootStateType, string | null>(state => state.profile.profile._id)

    return (
        <table className={style.cardsTable}>
            <caption className={style.cardsTableDescription}>Card packs</caption>
            <thead className={style.cardsThead}>
                <Header/>
            </thead>
            <tbody>
                {packs?.map((el, i) =><tr key={el._id}>
                    <Column key={el._id} current={el}/>
                    {el.user_id === currentId ? <button key={i}>delete</button> : null}
                </tr>)}
            </tbody>
        </table>
    )
}