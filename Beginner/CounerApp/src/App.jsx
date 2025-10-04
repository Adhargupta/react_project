import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col">
      <div className="p-5">
        <div className="">{count}</div>
      </div>
      <div className="button flex gap-2">
        <button onClick={()=>setCount((prev)=>prev+1)}>Increament</button>
        <button onClick={()=>count>0?setCount((prev)=>prev-1):setCount((prev)=>prev)}>Decreament</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
