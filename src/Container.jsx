import React, {useContext} from 'react';
import {ThemeContext} from './App.jsx';
import ChangeThemeButton from "./ChangeThemeButton.jsx";

function Container() {

    const {theme} = useContext(ThemeContext)

    return (
        <div id={`${theme}-theme-container`}>
            {theme}
            <ChangeThemeButton/>
        </div>
    )
}

export default Container;