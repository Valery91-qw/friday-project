import style from "../TestStand.module.css";
import {CustomInputText} from "../../../Common/CustomElements/Input/CostomInputText";
import React, {ChangeEvent, useState} from "react";


export const CustomInput = () => {

    const [text, setText] = useState('')

    const setTextInField = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }

    return(<>
         <div className={style.textStandItem}>
            <CustomInputText onChange={setTextInField}/>
            {text}
        </div>
    </>)
}