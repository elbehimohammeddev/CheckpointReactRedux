import React from 'react'
import Edit from './Edit'

const Task = ({task}) => {
    return (
        <div>
            <input  type="checkbox" />
            <span> {task.text} </span>
            <button>Delete</button>
            <Edit task={task} />
        </div>
    )
}

export default Task
