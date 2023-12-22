import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const myFunction = useCallback(() => {
    console.log('My function is called');
  },[count,setCount])
  
  const handleClick = useCallback(() => {
    myFunction();
  },[count]);

  const madrchod = ()=>{
    let a = Math.random();
    setCount(count + 1)
    myFunction()

  }
  

  return (
    <div>
      <button onClick={handleClick}>Call My Function</button>
      <p>Count: {count}</p>
      <button onClick={madrchod}>Increment Count</button>
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState(100);
//   const IncrementCount = ()=>{
//     setCount(count+1) ;
//   }
//   const DecrementName = ()=>{
//     setName(name-1)
//   }
//   const print = ()=>{
//     console.log("rerender")
//   }
//   print()

//   return (
//     <div>
//       <p>{count}</p>
//       <p>{name}</p>
//       <button onClick={IncrementCount} >Increment</button>
//       <button onClick={DecrementName}>Change Name</button>
//     </div>
//   );
// }

export default App
