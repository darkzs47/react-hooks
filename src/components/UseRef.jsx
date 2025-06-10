import React, {useRef, useState} from "react";

function UseRef(){

    const [value, setValue] = useState('');

    const [text, setText] = useState('');

    const handlerSetValue = () => setValue(inputRef.current?.value);

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current?.focus();
        setText(inputRef.current?.value);
        setValue('');
    };

    return (
        <>
            <input ref={inputRef} onInput={handlerSetValue} value={value} type="text"/>
            <button onClick={focusInput}>Фокус!</button>
            {text && <p>{text}</p>}
        </>
    )
}

export default UseRef;