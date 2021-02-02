import React from 'react';
import './App.css';
import {Headers} from "./components/headers/Headers";
import { Routes } from './components/Routes/Routes';
import {HashRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <HashRouter>
        <Headers/>
        <Routes />
        </HashRouter>
    </div>
  );
}

export default App;
