import {useState, createContext, useContext} from 'react'
import './App.css'
import Container from "./Container.jsx";

export const ThemeContext = createContext('dark');

function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Container/>
            </ThemeContext.Provider>
        </>
    )
}

export default App