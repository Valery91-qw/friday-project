import {useDispatch} from "react-redux";
import style from "./Pagination.module.scss"
import React, {FC} from "react";
import {getPacks} from "../../bll/packs-reducer";

type PropsType = {
    totalCount: number
    elementOnPage: number
    currentPage: number
}

export const Pagination: FC<PropsType> = ({totalCount , elementOnPage , currentPage }) => {

    const dispatch = useDispatch()

    const amountElements = (event: React.SyntheticEvent<HTMLSelectElement, Event>) => {
        let amount = event.currentTarget.value
        dispatch(getPacks("&pageCount=" + amount))
    }
    const getPage = (i: number, elementOnPage: number | null) => {
        dispatch(getPacks(`&page=${i}&pageCount=${elementOnPage}`))
    }
        let pages = [];
        const lastPage = Math.ceil(totalCount / elementOnPage)
        for (let i = 1; i <= lastPage; i++) {
            pages.push((
                <button key={i} onClick={() => getPage(i, elementOnPage)}>
                    {i}
                </button>
            ))
        }

        if ((currentPage + 4) < lastPage) {
            pages[currentPage + 2] = (
                <span key={currentPage + 3}>
                -___-
            </span>
            );
            pages = pages.filter((p, i) => i < (currentPage + 3) || i === (lastPage - 1))
        }
        if (currentPage > 5) {
            pages[1] = (
                <span key={2}>
                0___0
            </span>
            );
            pages = pages.filter((p, i) => i < 2 || i > currentPage - 4)
        }
    return (
        <div className={style.paginationWrapper}>
            <select defaultValue={"amount " + elementOnPage} onChange={amountElements}>
                <option value={4}>amount 4</option>
                <option value={8}>amount 8</option>
                <option value={12}>amount 12</option>
            </select>
            {pages}
        </div>
    )
}