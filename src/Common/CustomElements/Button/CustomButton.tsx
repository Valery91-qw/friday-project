import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./CustomButton.module.css"

type DefaultProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const CustomButton: React.FC<DefaultProps> = ({className,...restProps}) => {

    const customStyle = `${style.commonButtonStyle}`

    return ( <button
        className={customStyle}
        {...restProps}
    />)
}
