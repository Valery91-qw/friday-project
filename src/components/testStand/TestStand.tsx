import React from "react";
import style from "./TestStand.module.css"
import {CustomButtonComponent} from "./customButton/CustomButton";
import {CustomInput} from "./customInput/CustomInput";
import {CustomCheckboxComponent} from "./customeCheckbox/CustomCheckbox";
import {RequestGetComponent} from "./testRequest/requestGet";
import {RequestPostComponent} from "./testRequest/requestPost";

export const TestStand = () => {
    return (
        <div className={style.textStandContainer}>
            <h1 className={style.title}>Test stand</h1>
            <CustomButtonComponent />
            <CustomInput />
            <CustomCheckboxComponent/>
            <RequestGetComponent />
            <RequestPostComponent />
        </div>)
}