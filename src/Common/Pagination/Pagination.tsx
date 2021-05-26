import {useDispatch} from "react-redux";
import style from "./Pagination.module.scss"
import React, {FC} from "react";
import {getPacks} from "../../bll/packs-reducer";

type PropsType = {
    totalCount: number | null
    elementOnPage: number | null
    currentPage: number | null
}

export const Pagination: FC<PropsType> = ({totalCount, elementOnPage, currentPage}) => {

    const dispatch = useDispatch()

    const amountElements = (event: React.SyntheticEvent<HTMLSelectElement, Event>) => {
        let amount = event.currentTarget.value
        dispatch(getPacks("&pageCount=" + amount))
    }
    const getPage = (i: number) => {
        dispatch(getPacks("&page=" + i))
    }

    let pages = [];
    // @ts-ignore
    const lastPage = Math.ceil(totalCount/ elementOnPage)
    for (let i = 1; i <= lastPage; i++) {
        pages.push((
            <button key={i} onClick={() => getPage(i)}>{i}
            </button>
        ))
    }
    // @ts-ignore
    if((currentPage + 4) < lastPage) {
        // @ts-ignore
        pages[currentPage + 2] = (
            // @ts-ignore
            <span key={currentPage + 3}>
                -___-
            </span>
        );
        // @ts-ignore
        pages = pages.filter((p, i) => i < (currentPage + 3) || i === (lastPage - 1))
    }
    // @ts-ignore
    if(currentPage > 5) {
        pages[1] = (
            <span key={2}>
                -___-
            </span>
        );
        // @ts-ignore
        pages = pages.filter((p, i) => i < 2 || i > currentPage - 4)
    }

    return (
        <div className={style.paginationWrapper}>
            <select value={"amount " + elementOnPage} onChange={amountElements}>
                <option value={4}>amount 4</option>
                <option value={8}>amount 8</option>
                <option value={12}>amount 12</option>
            </select>
            {pages}
        </div>
    )
}