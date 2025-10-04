import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Counter from './games/Counter.jsx'
import StopWatch from './games/StopWatch.jsx'

createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App/>
  // </BrowserRouter>
  <StopWatch/>
)
