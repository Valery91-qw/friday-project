import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomInputTextx.module.css"

type DefaultType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const CustomInputText: React.FC<DefaultType> = ({type, ...restProps}) => {

    // const onChangeCallback =  (event: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(event)
    // }
    return (<>
        <input
            type="text"
            className={style.customInput}
            {...restProps}

        />
    </>)
}
