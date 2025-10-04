import { useState } from 'react';
import './index.css'

function App() {
  const [state, setState] = useState("❌")
  const [Div,setDiv] = useState([])
  let toggle = false
  let start = true

  // const Div = []

  function check(e,index){
    if(start === false){
      return;
    }
    if (e.target.innerHTML !== "") {
      return; // already filled, do nothing
    }
    else{
      if(state == "❌"){
        e.target.innerHTML = "❌"
        setState("⚪️")
      }
      else{
        e.target.innerHTML = "⚪️"
        setState("❌")
      }
      setDiv((prev)=>[index,...prev])
      console.log(Div,Div.length);
    }

  }
  function reset(){
    Div.forEach((index) => {
      document.querySelector(`.box-${index + 1}`).innerHTML = "";
    })
    setDiv([])
    setState("❌")
    start = true
    console.log(Div.length);
  }
  return (
    <div className="body w-screen h-screen bg-teal-950">
      <h1>Tic Tac Toe</h1>
      <div className="container flex flex-col gap-[12px]">

        <div className="row row-1">
          <div onClick={(e)=>check(e,0)} className="box box-1"></div>
          <div onClick={(e)=>check(e,1)} className="box box-2"></div>
          <div onClick={(e)=>check(e,2)} className="box box-3"></div>
        </div>

        <div className="row row-2">
          <div onClick={(e)=>check(e,3)} className="box box-4"></div>
          <div onClick={(e)=>check(e,4)} className="box box-5"></div>
          <div onClick={(e)=>check(e,5)} className="box box-6"></div>
        </div>

        <div className="row row-3">
          <div onClick={(e)=>check(e,6)} className="box box-7"></div>
          <div onClick={(e)=>check(e,7)} className="box box-8"></div>
          <div onClick={(e)=>check(e,8)} className="box box-9"></div>
        </div>

      </div>
      <button onClick={()=>reset()}>Restart</button>
    </div>
  )
}

export default App
