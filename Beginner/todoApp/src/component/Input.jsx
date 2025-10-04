import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../folder/todo/todoSlice'

function Input() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

  return (
    <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
           onClick={() => {
            if (input.trim() === "") return; // prevent empty todos
            dispatch(addTask(input));
            setInput(""); // clear input field
          }}          
           className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
  )
}

export default Input