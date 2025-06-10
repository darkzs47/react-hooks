import React, {memo} from "react";

const Task = memo(function Task({ id, text, completed, dispatch}) {
    return (
        <div key={id} style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
            {text} {completed && '✅'}
            <div style={{marginTop: '0.5rem'}}>
                <button onClick={() => dispatch({type: 'Complete', id: id})} disabled={completed}>
                    Выполнить
                </button>
                <button onClick={() => dispatch({type: 'Delete', id: id})}>
                    Удалить
                </button>
            </div>
        </div>
    )

})

function Tasks({tasks, dispatch}) {
    return (
        <>
            {tasks.map(task => (
                <Task id={task.id} text={task.text} completed={task.completed} dispatch={dispatch}/>
            ))}
        </>
    )
}

export default Tasks;