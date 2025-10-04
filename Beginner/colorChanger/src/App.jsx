import { useState } from 'react'

function App() {
  const [color, setVColor] = useState("#242424")

  return (
    <div style={{backgroundColor: color}} className="flex items-center justify-center w-screen h-screen flex-col">
      <div className="flex flex-row space-x-2 p-4 gap-1.5">
        <div onClick={()=>setVColor("red")} className="cursor-pointer w-16 h-16 bg-red-700"></div>
        <div onClick={()=>setVColor("blue")} className="cursor-pointer w-16 h-16 bg-blue-500"></div>
        <div onClick={()=>setVColor("green")} className="cursor-pointer w-16 h-16 bg-green-500"></div>
        <div onClick={()=>setVColor("yellow")} className="cursor-pointer w-16 h-16 bg-yellow-500"></div>
        <div onClick={()=>setVColor("purple")} className="cursor-pointer w-16 h-16 bg-purple-500"></div>
      </div>
      <div className="flex flex-row space-x-2 p-4 gap-1.5">
        <div onClick={()=>setVColor("pink")} className="cursor-pointer w-16 h-16 bg-pink-500"></div>
        <div onClick={()=>setVColor("orange")} className="cursor-pointer w-16 h-16 bg-orange-500"></div>
        <div onClick={()=>setVColor("indigo")} className="cursor-pointer w-16 h-16 bg-indigo-500"></div>
        <div onClick={()=>setVColor("teal")} className="cursor-pointer w-16 h-16 bg-teal-500"></div>
        <div onClick={()=>setVColor("gray")} className="cursor-pointer w-16 h-16 bg-gray-500"></div>
      </div>
      <div className="button">
        <button onClick={()=>setVColor("#242424")}>Reset</button>
      </div>
    </div>
  )
}

export default App
