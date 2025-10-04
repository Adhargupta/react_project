import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Counter from './games/Counter'

function App() {
  const [count, setCount] = useState(0)

  const heading_arr = ["Counter","StopWatch"]
  const para_arr = [
    "This feature keeps track of all your button clicks in real time. Every time you press the button, the counter updates instantly, showing the total number of clicks you’ve made so far. It’s a simple yet interactive way to see.",
    "A stopwatch is a simple tool that lets you start, pause, and reset time tracking. It’s commonly used to measure how long an activity or event takes, making it handy for workouts, study sessions, or everyday tasks."

  ]

  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home arr_head={heading_arr} arr_para={para_arr}/>}/>
        <Route path='/Counter' element={<Counter />}/>
      </Routes>

    </>
  )
}

export default App
