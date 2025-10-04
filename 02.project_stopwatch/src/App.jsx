import { useState,useEffect,useCallback } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [start, setStart] = useState(true)

  // function update(){
  //   if(start==true){
  //     setTimeout(()=>{
  //       setCount(count+1)
  //     },1000)
  //   }
  // }
  // update()


  // return (
  //   <>
  //     <div className="">{count}</div>
  //     <button onClick={()=>{start==true?setStart(false):setStart(true)}}>pause</button>
  //   </>
  // )




  
  // const [stop, setStop] = useState(true)
  // const [count,setCount] = useState(0)

  // useEffect(()=>{
  //     if(stop==true){
  //       const time = setInterval(()=>{
  //         setCount(prev=>prev+1)
  //       },1000)
  //       return ()=>clearInterval(time)
  //       }
  //     else{
  //       setCount(count)
  //     }
  // },[stop])

  // return(
  //   <>
  //     <div className="">{count}</div>
  //     <button onClick={()=>{setStop(true)}}>start</button>
  //     <button onClick={()=>{setStop(false)}}>stop</button>
  //     <button onClick={()=>{setCount(0)}}>Reset</button>
  //   </>
  // )


  const [stop, setStop] = useState(true)
  const [count,setCount] = useState(0)

  const time = useCallback(()=>{
    if(stop==true){
      setInterval(()=>{
        setCount(prev=>prev+1)
      },1000)
    }
    else{
      setCount(count)
    }
  },[])

  useEffect(()=>{
    time()
  },[stop])

  return(
    <>
      <div className="">{count}</div>
      <button onClick={()=>{setStop(true)}}>start</button>
      <button onClick={()=>{setStop(false)}}>stop</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}

export default App


// 03.project_todo-logic