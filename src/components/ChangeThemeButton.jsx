import {React, useContext} from "react";
import {ThemeContext} from "../App.jsx";

export default function ChangeThemeButton() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Сменить тему
        </button>
    )
}