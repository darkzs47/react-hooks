import React from "react";

const MemoChild = React.memo(({onClick}) => {
    console.log('Memo render');

    return (
        <button onClick={onClick}>Увеличить счётчик</button>
    );
});

export default MemoChild;