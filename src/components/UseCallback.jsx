import React, {useCallback, useState} from "react";
import ListCallback from "./ListCallback.jsx";
import List from "./List.jsx";

export default function UseCallback() {
    const [callbackCount, setCallbackCount] = useState(0);

    const [count, setCount] = useState(0);

    const incrementCallback = useCallback(
        () => {
            setCallbackCount(callbackCount => callbackCount + 1)
        }, []);

    const increment = (() => {
        setCount(count => count + 1)
    });

    return (
        <>
            <button onClick={incrementCallback}>Увеличить с useCallback</button>
            <button onClick={increment}>Увеличить</button>
            <ListCallback count={callbackCount}/>
            <List count={count}/>
        </>
    );
}