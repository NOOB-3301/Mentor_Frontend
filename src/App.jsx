import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import SignUp from './Components/Authentication/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </>
  )
}

export default App