import SignUP from './pages/SignUP'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {

  return (
    <div className='w-screen h-screen bg-blue-950 flex justify-center items-center'>
      <Routes>
        <Route path='/SignUp' element={<SignUP/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        {/* <Route path='*' element={<Navigate to="/SignUp" />} /> */}
      </Routes>
    </div>
  )
}

export default App
