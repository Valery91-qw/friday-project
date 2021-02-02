import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./CustomCheckBox.module.css"

type DefaultPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const CustomCheckBox: React.FC<DefaultPropsType> = ({type, ...restProps}) => {
    return (<>
        <label>
            <input
                className={style.customCheckbox}
                type="checkBox"
                {...restProps}
            />
            Check
        </label>
    </>)
}