import {useDispatch, useSelector} from "react-redux";
import {getPacks} from "../../bll/packs-reducer";
import {RootStateType} from "../../bll/store";
import {PackType} from "../../dal/pack";
import style from "./Packs.module.scss"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {PacksTable} from "./table/PacksTable";
import {Pagination} from "../../Common/Pagination/Pagination";
import {useEffect} from "react";
import {checkAuthUser} from "../../bll/login-reducer";

export const Packs = () => {

    const packs = useSelector<RootStateType, Array<PackType> | null>(state => state.packs.cardPacks)
    const {cardPacksTotalCount, pageCount, page} = useSelector<RootStateType, any>(state => state.packs)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(checkAuthUser())
        }
    }, [dispatch])
    return (<div className={style.tableWrapper}>
        <PacksTable packs={packs}/>
        <CustomButton onClick={() => dispatch(getPacks())}>Get</CustomButton>
        <Pagination totalCount={cardPacksTotalCount} elementOnPage={pageCount} currentPage={page}/>
    </div>)
}
