import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/task/taskSlice'
import Listing from './Listing'

function AddTask() {
    const [text, setText] = useState("")

    const dispatch = useDispatch()                    //Uses to run/call reducer/logic

    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(addItem(text))
      setText("")
    }
  return (
    <> 
      <form className='mt-2.5 form' onSubmit={handleSubmit}>
          <input
          className='border-2 border-black h-10 input'
          placeholder='Add a task'
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
          <button className='text-white ml-2.5 button' type='submit'>Add</button>
      </form>
    </>
  )
}

export default AddTask