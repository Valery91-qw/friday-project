import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {ModalWindow} from "../../../../Common/modal/ModalWindow";
import {CustomInputMy} from "../../../../Common/CustomElements/Input/CostomInput";
import {CustomButton} from "../../../../Common/CustomElements/Button/CustomButton";
import {createCardPack, deleteCardPack} from "../../../../bll/packs-reducer";

export const Header = () => {

    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
    const [packName, setPackName] = useState('')

    const showModalWindow = () => {
        setShowModal(true)
    }
    const closeModalWindow = () => {
        setPackName('')
        setShowModal(false)
    }
    const handlerPackName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPackName(event.currentTarget.value)
    }
    const handlerAddPack = () => {
            dispatch(createCardPack({name: packName}))
            setPackName('')
            setShowModal(false)
    }
    return (<>
        {showModal ?
            <ModalWindow title="Add Pack" closeCallback={closeModalWindow}>
                <CustomInputMy onChange={handlerPackName} placeholder="Pack name"/>
                <CustomButton onClick={handlerAddPack}>Add pack</CustomButton>
            </ModalWindow>
            : null}
        <tr>
            <th>Name</th>
            <th>Cards amount</th>
            <th>Last update</th>
            <th>Grade</th>
            <th>Rating</th>
            <th>Carts</th>
            <th>
                <button onClick={showModalWindow}>Add Pack</button>
            </th>
        </tr>
    </>)
}