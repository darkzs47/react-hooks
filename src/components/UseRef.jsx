import React, {useRef, useState} from "react";

function UseRef(){

    const [value, setValue] = useState();

    const handlerSetValue = () => setValue(inputRef.current.value);

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} onInput={handlerSetValue} value={value} type="text"/>
            {value}
            <button onClick={focusInput}>Фокус!</button>
        </>
    )
}

export default UseRef;