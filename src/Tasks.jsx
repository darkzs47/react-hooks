import React from "react";

function Tasks({tasks, dispatch}) {
    return (
        <>
            {tasks.map(task => (
                <div key={task.id} style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
                    {task.id + 1} задача. {task.text} {task.completed && '✅'}
                    <div style={{marginTop: '0.5rem'}}>
                        <button onClick={() => dispatch({type: 'Complete', id: task.id})} disabled={task.completed}>
                            Выполнить
                        </button>
                        <button onClick={() => dispatch({type: 'Delete', id: task.id})}>
                            Удалить
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Tasks;