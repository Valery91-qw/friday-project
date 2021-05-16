import style from "../TestStand.module.css";
import {CustomInputMy} from "../../../Common/CustomElements/Input/CostomInput";
import React, {ChangeEvent, useState} from "react";


export const CustomInput = () => {

    const [text, setText] = useState('')

    const setTextInField = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value)
    }

    return(<>
         <div className={style.textStandItem}>
            <CustomInputMy onChange={setTextInField}/>
            {text}
        </div>
    </>)
}