import {useDispatch} from "react-redux";
import {useState} from "react";

export const Header = () => {

    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)

    const toWritePostRequest = () => {
        //dispatch(createCardPack({name: "4:20 Weeee"}))
        //dispatch(deleteCardPack("60ad015d6a09731fb469ee92"))
    }

    return(<>
        <tr>
            <th>Name</th>
            <th>Cards amount</th>
            <th>Last update</th>
            <th>Grade</th>
            <th>Rating</th>
            <th>Carts</th>
            <th>
                <button onClick={toWritePostRequest}>Add Pack</button>
            </th>
        </tr>
    </>)
}