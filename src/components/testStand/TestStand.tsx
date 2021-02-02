import React, {ChangeEvent, useState} from "react";
import style from "./TestStand.module.css"
import {CustomButton} from "../../Common/CustomElements/Button/CustomButton";
import {CustomInputText} from "../../Common/CustomElements/Input/CostomInputText";
import {CustomCheckBox} from "../../Common/CustomElements/CheckBox/CustomCheckBox";

export const TestStand = () => {

    const [on, setOn] = useState(false)
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const onChange = () => {
        setOn(!on)
    }
    const onChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }
    const onChange3 = (event: ChangeEvent<HTMLInputElement>) => {
        setShow(event.currentTarget.checked)
    }
    return (<div className={style.textStandContainer}>
        <h1 className={style.title}>Test stand</h1>
        <div className={style.textStandItem}>
            <CustomButton onClick={onChange}>Click me</CustomButton>
            {on && <span className={style.buttonsText}>Button do</span>}
        </div>
        {show && <div className={style.textStandItem}>
            <CustomInputText onChange={onChange2}/>
            {text}
        </div>}

        <CustomCheckBox onChange={onChange3}/>

    </div>)
}