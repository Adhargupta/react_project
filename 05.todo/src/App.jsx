import { useState } from 'react'
import './App.css'
import AddTask from './Components/AddTask'
import Listing from './Components/Listing'
import FilterItems from './Components/FilterItems'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Todo App</h1>
      <AddTask/>
      <FilterItems/>
      <Listing/>
    </>
  )
}

export default App
