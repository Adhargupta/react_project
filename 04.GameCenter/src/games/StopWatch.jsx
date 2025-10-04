import React from 'react'
import { useState,useRef,useCallback,useEffect } from 'react'

function StopWatch() {
    const [value, setValue] = useState(0)
    const [pause, setPause] = useState(false)
    const element = useRef()

    const stop = () => {
        if (pause) {
          setPause(false);
        } else {
          setPause(true);
        }
      };

    useEffect(()=>{
        if(pause==false){
            let timer = setInterval(()=>{
                setValue(value+1)
            },1000)
            return ()=>clearInterval(timer)
        }
    },[pause, value])
  return (
    <div className='center'>
        <h1 className='text-center text-6xl'>{value}</h1>
        <br />        
        {/* <button>Start</button> */}
        <div className="flex gap-3.5">
            <button onClick={stop}>{pause ? "Resume" : "Pause"}</button>
            <button onClick={()=>setValue(0)}>Reset</button>
        </div>
    </div>
  )
}

export default StopWatch