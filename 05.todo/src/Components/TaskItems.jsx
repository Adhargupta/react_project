import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/task/taskSlice'

function TaskItems({task}) {
    const dispatch = useDispatch()
  return (
    <li>
        {task.text}
        <div>
            <button
             onClick={()=>dispatch(addItem(task.completed))}
             className='bg-amber-50 button'>
                Done
            </button>
            <button className='bg-amber-50 button delete'>Delete</button>
        </div>
    </li>
  )
}

export default TaskItems