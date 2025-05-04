import React, {useCallback, useState} from "react";
import MemoChild from "./MemoChild.jsx";
import Child from "./Child.jsx";

function ReactMemo() {
    const [count, setCount] = useState(0);

    const [useAlt, setUseAlt] = useState(false);

    const incrementA = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const incrementB = useCallback(() => {
        setCount(prev => prev + 2);
    }, []);

    const toggleFunction = () => {
        setUseAlt(prev => !prev);
    };

    const currentIncrement = useAlt ? incrementB : incrementA;

    console.log('Parent render');

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/*
            Перередер MemoChild будет происходить при каждой смене функции,
            так как эта функция передаётся в этот компонент.
            Обычный же Child, будет рендериться каждый раз, когда будет рендериться род. компонент
            */}
            <h2>Счётчик: {count}</h2>
            <MemoChild onClick={currentIncrement}/>
            <Child/>
            <button onClick={toggleFunction}>
                Сменить функцию (перерендер: {useAlt ? 'B' : 'A'})
            </button>
        </div>
    )
}

export default ReactMemo;
