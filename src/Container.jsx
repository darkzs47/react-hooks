import React, {useContext} from 'react';
import {ThemeContext} from './App.jsx';
import ChangeThemeButton from "./components/ChangeThemeButton.jsx";
import UseCallback from "./components/UseCallback.jsx";
import SumNumbers from "./components/SumNumbers.jsx";
import UseRef from "./components/UseRef.jsx";
import Reducer from "./components/Reducer.jsx";
import ReactMemo from "./components/ReactMemo.jsx";

function Container() {

    const {theme} = useContext(ThemeContext)

    return (
        <div id={`${theme}-theme-container`}>
            <div>
                <ChangeThemeButton/>
                <UseCallback/>
            </div>
            <div id='sum-numbers'>
                <SumNumbers/>
            </div>
            <div>
                <UseRef/>
            </div>
            <div id='reducer'>
                <Reducer/>
            </div>
            <div>
                <ReactMemo/>
            </div>
        </div>
    )
}

export default Container;