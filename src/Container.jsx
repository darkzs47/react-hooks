import React, {useContext} from 'react';
import {ThemeContext} from './App.jsx';
import ChangeThemeButton from "./ChangeThemeButton.jsx";
import UseCallback from "./UseCallback.jsx";


function Container() {

    const {theme} = useContext(ThemeContext)

    return (
        <div id={`${theme}-theme-container`}>
            <ChangeThemeButton/>
            <UseCallback/>
        </div>
    )
}

export default Container;