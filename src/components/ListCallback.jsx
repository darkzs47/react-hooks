import React, {memo} from "react";

const ListCallback = memo(({count}) => {
    console.log("render")

    return (
        <ul>
            {Array.from({length: count}, (_, i) => (
                <li key={i}>Элемент {i + 1}</li>
            ))}
        </ul>
    )
})

export default ListCallback;