import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo'
import Login from './Login'
import Add from './Add'

function App() {
  let [isLoggedIn,setIsLoggenIn] =useState(true);

  return (
    <>
      <h1>UseEffect Function</h1>

      <Demo />

      <hr/>

      <button onClick={()=>setIsLoggenIn(!isLoggedIn)}>Click Here</button>
      {
        isLoggedIn ? <h1>Login success...!!</h1> : <Login />
      }

      <hr />

      <Add />
    </>
  )
}

export default App
