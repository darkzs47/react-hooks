import React, {memo, useCallback, useState} from "react";
import ListCallback from "./ListCallback.jsx";
import List from "./List.jsx";

const Button = memo(function ({ handler }) {
    console.log('Button render');
    return (
        <button onClick={handler}>
            Увеличить
        </button>
    )
})

const ButtonCallback= memo(function ({ handler }) {
    console.log('ButtonCallback render');
    return (
        <button onClick={handler}>
            Увеличить c useCallback
        </button>
    )
})

export default function UseCallback() {

    const [count, setCount] = useState(0);

    const incrementCallback = useCallback(
        () => {
            setCount(count => count + 1)
        }, []);

    const increment = (() => {
        setCount(count => count + 1)
    });

    return (
        <>
            <Button handler={increment}/>
            <ButtonCallback handler={incrementCallback}/>
            <List count={count}/>
        </>
    );
}