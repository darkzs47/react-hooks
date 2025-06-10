import {useState, createContext, useEffect} from 'react'
import './App.css'
import Container from "./Container.jsx";

export const ThemeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <Container/>
            </ThemeContext.Provider>
        </>
    )
}

export default App