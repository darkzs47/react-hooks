import React, {useReducer, useRef} from "react";
import Tasks from "./Tasks.jsx";

const initialTasks = []

function reducer(state, action) {
    switch (action.type) {
        case 'Add':
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload.text,
                    completed: false,
                },
            ];

        case 'Delete':
            return state.filter(task => task.id !== action.id);

        case 'Complete':
            return state.map(task =>
                task.id === action.id ? {...task, completed: !task.completed} : task
            );

        default:
            state;
    }
}


function Reducer() {
    const [tasks, dispatch] = useReducer(reducer, initialTasks);

    const [text, setText] = React.useState('');

    const handleAdd = () => {
        if (text.trim()) {
            dispatch({type: 'Add', payload: {text: text}});
            setText('');
        }
    };

    return (
        <div id="tasks">
            Задачи
            <input value={text} onChange={e => setText(e.target.value)} type="text"/>
            <button onClick={handleAdd}>Добавить</button>
            <Tasks tasks={tasks} dispatch={dispatch}/>
        </div>
    )
}

export default Reducer;