import {FC} from "react";

type PropsType = {
    totalPackCount: number | null
}

export const Pagination: FC<PropsType> = ({totalPackCount}) => {
    return (
        <div>
            {totalPackCount}
        </div>
    )
}