import React from 'react';

export default function ListWithoutCallbacks({ count }) {
    console.log('🔁 Ререндер: ListWithoutCallback');

    const items = Array.from({ length: count }, (_, i) => `Элемент ${i + 1}`);

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}