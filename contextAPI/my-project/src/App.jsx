import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import userContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
        <h1>React and Zaheer</h1>
        <Login/>
        <Profile></Profile>
    </userContextProvider>
  )
}

export default App
