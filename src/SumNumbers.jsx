import React, {useState} from "react";

function SumNumbers() {

    const [array, setArray] = useState([]);
    const [number, setNumber] = useState(0);

    const generateArray = React.useCallback(() => {
        const newArray = Array.from({ length: 10 }, () =>
            Math.floor(Math.random() * 100)
        );
        setArray(newArray);
    }, []);

    const handleRandomValue = React.useCallback(() => setNumber(Math.floor(Math.random() * 100)), [])

    React.useEffect(()  => {
        generateArray();
    }, [generateArray]);

    const sum = React.useMemo(() => array.reduce((sum, num) => sum + num, 0), [array])

    return (
        <>
            <button onClick={handleRandomValue}>Перерендер компонента</button>
            <button onClick={generateArray}>Сгенерировать числа</button>
            <ul>
                {array.map((num, index) => (
                    <li key={index}>Число: {num}</li>
                ))}
                <li>
                    Сумма: {sum}
                </li>
            </ul>
        </>
    )
}

export default SumNumbers;