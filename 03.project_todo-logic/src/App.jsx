import { useState,useCallback,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user_input,set_user_input] = useState("")
  const element = useRef()
  let sub_div = []


  const read = useCallback((e)=>{
    const value = e.target.value
    // console.log(value);
    set_user_input(value)
  },[user_input])

  const fun_add = useCallback(()=>{
    const div = element.current

    sub_div.push(
      <div>{div.innerHTML}</div>
    )

    // div.appendChild(sub_div)

    set_user_input("")

  },[user_input])
  return (
    <>
      <div>
        <input style={{backgroundColor:"white",color:"black"}} value={user_input} type="text" onChange={(e)=>{read(e)}}/>
        <button onClick={fun_add}>Add</button>
        <div ref={element} className=""></div>
      </div>
    </>
  )
}

export default App
