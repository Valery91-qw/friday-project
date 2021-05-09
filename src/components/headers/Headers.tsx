import React, {useState} from "react";
import style from "./Headers.module.css"
import {Navigation} from "./navigation/Navigation";

export const Headers = () => {

    const [showMenu, setShowMenu] = useState( false )
    const showMenuHandler = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={style.headerContainer} >
            <h2 onClick={showMenuHandler} className={style.menu}>Menu</h2>
            {showMenu && <Navigation showMenu={showMenu} showMenuHandler={showMenuHandler}/>}
        </div>
    )
}