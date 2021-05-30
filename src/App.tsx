import React, {useEffect} from 'react';
import './App.scss';
import {Headers} from "./components/headers/Headers";
import {Routes} from './components/routes/Routes';
import {HashRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkAuthUser} from "./bll/login-reducer";
import {RootStateType} from "./bll/store";


function App() {

    const isInitialize = useSelector<RootStateType, boolean>(state => state.profile.isInitialize)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuthUser())
    }, [dispatch])
    return (
        <div className="App">
            <HashRouter>
                <Headers isInitialize={isInitialize}/>
                <div className="mainContainer">
                    <Routes isInitialize={isInitialize}/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
