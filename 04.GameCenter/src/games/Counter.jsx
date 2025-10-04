import React from 'react'
import { useState } from 'react'
import Back from '../Components/Back'

function Counter() {
    const [value, setValue] = useState(0)
  return (
    <div className="center">
        <h1 className='text-center text-6xl'>{value}</h1>
        <br />
        <div className="flex gap-3.5">
            <button className='btn-op border-white' onClick={()=>setValue(prev=>prev+1)}>Add +</button>
            <button className='btn-op border-white' onClick={()=>value>0?setValue(prev=>prev-1):setValue(prev)}>Subs -</button>
        </div>

        <Back/>
    </div>
  )
}

export default Counter