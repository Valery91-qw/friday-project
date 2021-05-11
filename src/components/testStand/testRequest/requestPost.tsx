import React, {useState} from "react";
import {testRequest} from "../../../dal/testRequestFromServer";
import style from "../TestStand.module.css";
import {CustomButton} from "../../../Common/CustomElements/Button/CustomButton";

export const RequestPostComponent = () => {

    const [response, setResponse] = useState('')
    const [first, setFirst] = useState(true)

    const sendTestRequest = async () => {
        try {
            if(first) {
                const date = Date.now()
                const response = await testRequest.testPost(date)
                setResponse(response.data.info)
                setFirst(false)
                console.log(response)
            } else {
                setResponse('')
                setFirst(true)
            }
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
        }
    }

    return (
        <div className={style.textStandItem}>
            <CustomButton onClick={sendTestRequest}>send post</CustomButton>
            {response}
        </div>
    )
}