import React from "react";

export default function List({count}) {
    console.log("render")

    return (
        <ul>
            {Array.from({length: count}, (_, i) => (
                <li key={i}>Элемент {i + 1}</li>
            ))}
        </ul>
    )
}