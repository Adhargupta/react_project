import React from 'react'
import { useSelector } from 'react-redux'
import TaskItems from './TaskItems'


function Listing() {
    const {items, filter} = useSelector(state=>state.task)                       // By this we can access things like items and filters from store + state.task? -> bcz in store we have named as task {task: taskReducer}
    const filterd = filter==='completed'
    ?items.filter(tasks=>tasks.completed)
    :items
    console.log(items)
  return (
    <ul className='task-list'>
      {filterd.map(task=>(
        <TaskItems key={task.id} task={task}/>
      ))}
    </ul>
  )
}

export default Listing