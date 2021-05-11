import style from "../TestStand.module.css";
import React, {useState} from "react";
import {CustomButton} from "../../../Common/CustomElements/Button/CustomButton";


export const CustomButtonComponent = () => {

    const [visible, setVisible] = useState(false)

    const isVisible = () => {
        setVisible(!visible)
    }

    return (
        <div className={style.textStandItem}>
            <CustomButton onClick={isVisible}>Click me</CustomButton>
            {visible && <span className={style.buttonsText}>Button do</span>}
        </div>
    )
}