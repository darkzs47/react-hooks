import {useState, createContext, useContext, useEffect} from 'react'
import './App.css'
import Container from "./Container.jsx";

export const ThemeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState(sessionStorage.getItem('theme') || 'light');

    useEffect(() => {
        sessionStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Container/>
            </ThemeContext.Provider>
        </>
    )
}

export default App