import React from 'react'
import {useSelector} from 'react-redux'
import Task from "./Task"

const ListTask = () => {
    const listtask = useSelector((state) => state.task.listTasks)
    return (
        <div>
            <button>all</button>
            <button>done</button>
            <button>unDone</button>
            {listtask
            .map((el) => <Task task={el} key={el.id} />)
        }
            
        </div>
    )
}


export default ListTask
