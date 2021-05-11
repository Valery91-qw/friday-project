import {CustomCheckBox} from "../../../Common/CustomElements/CheckBox/CustomCheckBox";
import React, {ChangeEvent, useState} from "react";


export const CustomCheckboxComponent = () => {

    const [show, setShow] = useState(false)

    const showInput = (event: ChangeEvent<HTMLInputElement>) => {
        setShow(event.currentTarget.checked)
    }

    return(<>
        <CustomCheckBox onChange={showInput}/>
        {show && <span>checkbox</span>}
    </>)
}