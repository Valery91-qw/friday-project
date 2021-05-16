import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomInput.module.scss"

type DefaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const CustomInputMy: React.FC<DefaultType> = ({type, ...restProps}) => {

    let costType = type ? type : "text"

    return (<>
        <input
            type={costType}
            className={style.customInput}
            {...restProps}
        />
    </>)
}

