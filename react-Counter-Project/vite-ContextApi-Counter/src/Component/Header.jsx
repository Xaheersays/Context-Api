import React,{useContext} from 'react'
import CounterContext from '../Context/counterContext.js'

function Header() {
  const {count} = useContext(CounterContext)

  return (
    <div className=''>
          <h1>The Count is {count}</h1>

    </div>
  )
}

export default Header 