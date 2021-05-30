import style from "./ModalWindow.module.scss"
import {FC} from "react";


type PropType = {
    title: string
    closeCallback: () => void
}

export const ModalWindow: FC<PropType> = ({title,closeCallback, children}) => {
    return (
        <div className={style.modalWrapper}>
            <div className={style.modalWindow}>
                <button className={style.modalButtonClose} onClick={closeCallback}>X</button>
                <span className={style.modalHead}>{title}</span>
                <div className={style.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    )
}