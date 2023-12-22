import { useState } from 'react'
import './App.css'
// import Starter from '../01-useState/starter/03-useState-array.jsx'
// import Starter from '../01-useState/starter/04-useState-object.jsx'
import Second from './Second.jsx'

function App() {
  const [count, setCount] = useState(0)
  const firstCount=()=>{
    console.log('into the first comp incrementing')
    setCount(prev=>prev+1)
  }

  return (
    <>
    <div   className='flex  flex-col justify-center items-center gap-4 pt-5'>
      <div className='flex  justify-center items-center gap-4 pt-5'>
        <p>i am first and count is :<span className="bg-green-300 p-2 text-black">{count}</span></p>
        <button onClick={firstCount} className='bg-sky-500 p-4 rounded-lg'>first Comp Count++</button>
        </div>
        <div>
        <br />
        <Second/>
      </div>
    </div>

    </>
  )
}

export default App
