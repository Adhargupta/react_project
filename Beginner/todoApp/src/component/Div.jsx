import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, doneTask } from '../folder/todo/todoSlice';

function Div() {
    const dispatch = useDispatch()
    const task = useSelector(state=>state.todo.value)
    console.log(task);
  return (
    <ul className="space-y-2">
        {task.map(task=>(
        <li key={task.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border">
            <span className={`text-gray-700 ${task.completed ? "line-through" : ""}`}>
                {task.text}
            </span>
            <div className="flex gap-1.5">
                <button
                 onClick={()=>dispatch(doneTask(task.id))}
                 className="bg-green-500 text-white"
                >
                    Done
                </button>
                <button
                 onClick={()=>dispatch(deleteTask(task.id))}
                 className="bg-red-500 text-white"
                >
                    Remove
                </button>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default Div