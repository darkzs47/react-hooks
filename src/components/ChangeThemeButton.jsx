import {React, useContext} from "react";
import {ThemeContext} from "../App.jsx";

export default function ChangeThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Сменить тему
        </button>
    )
}