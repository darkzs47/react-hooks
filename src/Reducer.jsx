import React, {useReducer, useRef} from "react";
import Tasks from "./Tasks.jsx";

const initialTasks = []

function reducer(state, action) {
    switch (action.type) {
        case 'Add':
            return [
                ...state,
                {
                    id: action.payload.id,
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

    const taskRef = useRef(null);

    const handleAdd = () => {
        const text = taskRef.current.value.trim();
        if (text) {
            dispatch({type: 'Add', payload: {id: tasks.length, text}});
            taskRef.current.value = '';
        }
    };

    return (
        <div id="tasks">
            Задачи
            <input ref={taskRef} type="text"/>
            <button onClick={handleAdd}>Добавить</button>
            <Tasks tasks={tasks} dispatch={dispatch}/>
        </div>
    )
}

export default Reducer;