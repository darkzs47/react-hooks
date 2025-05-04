import React, {useCallback, useContext, useRef, useState} from 'react';
import {ThemeContext} from './App.jsx';
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import UseCallback from "./UseCallback.jsx";
import SumNumbers from "./SumNumbers.jsx";
import UseRef from "./UseRef.jsx";

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
        </div>
    )
}

export default Container;