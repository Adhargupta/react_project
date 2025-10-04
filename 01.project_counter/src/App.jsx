import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <div className="">{count}</div>
      <button onClick={()=>{count<20 ? setCount(count+1) : setCount(0)}}>Increament</button>
      <button onClick={()=>{count>0 ? setCount(count-1) : setCount(20)}}>Decreament</button>
    </div>
  )
}

export default App
