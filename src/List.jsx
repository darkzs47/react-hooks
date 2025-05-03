import React, { memo } from 'react';

function List({ count }) {
    console.log('🔁 Ререндер: List (useCallback)');

    const items = Array.from({ length: count }, (_, i) => `Элемент ${i + 1}`);

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default memo(List); // Ме