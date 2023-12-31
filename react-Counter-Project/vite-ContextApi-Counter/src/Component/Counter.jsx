import React, { useContext } from 'react'
import CounterContext from '../Context/counterContext'
function Counter() {
    const {count,setCount} = useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
        console.log(count)
    }}
       className='bg-sky-500 p-2 m-4 rounded-md shadow-2xl'>
        Increment
      </button>
      <button onClick={()=>setCount(count+1)}
        className='bg-sky-500 p-2 m-4 rounded-md'>
        Decrement
      </button>
    </div>
  )
}

export default Counter