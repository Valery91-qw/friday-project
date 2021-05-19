import style from "../TestStand.module.css";
import {CustomButton} from "../../../Common/CustomElements/Button/CustomButton";
import React, {useState} from "react";
import {testRequest} from "../../../dal/testRequestFromServer";


export const RequestGetComponent = () => {

    const [response, setResponse] = useState('')
    const [first, setFirst] = useState(true)

    const sendTestRequest = async () => {
        try {
            if(first) {
                const response = await testRequest.testGet()
                setResponse(response.data.info)
                setFirst(false)
                console.log(response)
            } else {
                setResponse('')
                setFirst(true)
            }
        } catch (e) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
        }
    }

    return (
        <div className={style.textStandItem}>
            <CustomButton onClick={sendTestRequest}>send get</CustomButton>
            {response}
        </div>
    )
}