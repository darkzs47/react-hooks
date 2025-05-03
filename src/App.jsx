import {useState, createContext, useContext, useEffect, useCallback} from 'react'
import './App.css'
import Container from "./Container.jsx";
import List from './List.jsx';
import ListWithoutCallbacks from './ListWithoutCallbacks.jsx';

export const ThemeContext = createContext('light');

function App() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    const incrementRaw = () => setCount(prev => prev + 1);
    const decrementRaw = () => setCount(prev => prev - 1);

    return (
        <div className="p-4 space-y-8">
            <h2 className="text-2xl font-bold">Счетчик: {count}</h2>

            <div className="space-y-2">
                <h3 className="text-xl">С useCallback:</h3>
                <div className="space-x-2">
                    <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        +
                    </button>
                    <button onClick={decrement} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        -
                    </button>
                </div>
                <List count={count} />
            </div>

            <hr className="border-t-2 border-gray-300" />

            <div className="space-y-2">
                <h3 className="text-xl">Без useCallback:</h3>
                <div className="space-x-2">
                    <button onClick={incrementRaw} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        +
                    </button>
                    <button onClick={decrementRaw} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        -
                    </button>
                </div>
                <ListWithoutCallbacks count={count} />
            </div>
        </div>
    );
}

export default App