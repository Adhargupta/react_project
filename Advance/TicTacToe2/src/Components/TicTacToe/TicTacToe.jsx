import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["","","","","","","","",""];

function TicTacToe() {
  let [count, setCount] = useState(0)
  let ref1 = useRef(null)
  let [lock, setLock] = useState(false)

  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)
  let box9 = useRef(null)

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

  function check(e,index){
    if(lock){
      return 0;
    }
    if(count%2==0){
      e.target.innerHTML = `<img src='${cross}'>`
      data[index]="x";
      setCount(++count)                   // count = count+1
    }
    else{
      e.target.innerHTML = `<img src='${circle}'>`
      data[index]="o";
      setCount(++count)
    }
    checkWin()
  }
  function checkWin(){
    if(data[0]!="" && data[1]!="" && data[2]!="" && data[3]!="" && data[4]!="" && data[5]!="" && data[6]!="" && data[7]!="" && data[8]!=""){
      ref1.current.innerHTML = "Draw !!"
    }
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      win(data[0]); // Top row
    }
    else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      win(data[3]); // Middle row
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      win(data[6]); // Bottom row
    }
    
    else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      win(data[0]); // Left column
    }
    else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      win(data[1]); // Middle column
    }
    else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      win(data[2]); // Right column
    }
    
    else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      win(data[0]); // Main diagonal
    }
    else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      win(data[2]); // Anti diagonal
    }
    
  }
  function win(winner){
    if(winner === 'o'){
      ref1.current.innerHTML = `Congratulations : <img src='${circle}'>`
    }
    else{
      ref1.current.innerHTML = `Congratulations : <img src='${cross}'>`
    }
    setLock(true)
  }
  function reset(){
    setLock(false)
    data = ["","","","","","","","",""];
    ref1.current.innerHTML = "Tic Tac Toe"
    box_array.forEach((e)=>{
      e.current.innerHTML = ""
    })
    setCount(0)
  }

  return (
    <div className="body w-screen h-screen bg-teal-950">
      <h1 ref={ref1}>Tic Tac Toe</h1>
      <div className="container flex flex-col gap-[12px]">

        <div className="row row-1">
          <div ref={box1} onClick={(e)=>check(e,0)} className="box box-1"></div>
          <div ref={box2} onClick={(e)=>check(e,1)} className="box box-2"></div>
          <div ref={box3} onClick={(e)=>check(e,2)} className="box box-3"></div>
        </div>

        <div className="row row-2">
          <div ref={box4} onClick={(e)=>check(e,3)} className="box box-4"></div>
          <div ref={box5} onClick={(e)=>check(e,4)} className="box box-5"></div>
          <div ref={box6} onClick={(e)=>check(e,5)} className="box box-6"></div>
        </div>

        <div className="row row-3">
          <div ref={box7} onClick={(e)=>check(e,6)} className="box box-7"></div>
          <div ref={box8} onClick={(e)=>check(e,7)} className="box box-8"></div>
          <div ref={box9} onClick={(e)=>check(e,8)} className="box box-9"></div>
        </div>

      </div>
      <button onClick={()=>reset()}>Restart</button>
    </div>
  )
}

export default TicTacToe