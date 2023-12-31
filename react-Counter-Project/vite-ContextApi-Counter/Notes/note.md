### context api 
- involves 3 step process
- 1) create
- 2) provider
- 3) Consumer

- so like we when we had to prop drill we use context-api / alternate redux/zastand
- now using context-api we can share vairables,props,states any other things that we pass as a props

# good practice :
- good practices are that we create Context folder inside src
```
    |-src
        |-Context
        |-Components

```
- we create suppose CounterContext.js [this file is creator]
- now we also use Provider [this file is like where we define our variables that we gonna share]
- so these two files shud export the creator and provider 

# process 

# step1 creation
```js
`CounterContext.js`
import { createContext } from "react";
const CounterContext = createContext();
export default CounterContext;
```

# step2 Provieder
- we import this creation here 
```js
import { useState } from "react"
import CounterContext from "./counterContext"
const CounterContextProvider = ({children})=>{
    const [count,setCount] = useState(0) //this is the vaiable we wanna share
    return (
        <CounterContext.Provider value={{count,setCount}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider
```
- we use `CounterContext.Provider` here we pass needed varibles inside an object  `value={{count,setCount}}` this way
- "{children}" is nothing but components we are goin to share our variables with

# one interim step
```js

import Counter from './Component/Counter'; //some component
import CounterContextProvider from './Context/counterContextProvider.jsx'; //this is provider

function App() {
  
  return (
    <>
        {// this step we are creating a wrapper that the things wrapped inside this CounterContextProvider are only
         // able to access and modify variables
        //  <CounterContextProvider>
        //     wrap components which are needed
        //  </CounterContextProvider>
        }
       <CounterContextProvider> 
            <div className='bg-slate-700 text-white h-screen w-screen text-2xl font-bold flex justify-center items-center flex-col'>
            <Header />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            </div>
       </CounterContextProvider>
    
  );
}
export default App;

```



# final step to consume

```js
import { useContext } from 'react'; //hook required to consume the variable
import CounterContext from '../Context/counterContext' //imported creator

function Counter() {
    const {count,setCount} = useContext(CounterContext) //we passin the creator inside useContext which allows us to 
                                                        //recieve varibles value={{count,setCount}} which were passed
    
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
        console.log(count)
    }}
       className='bg-sky-500 p-2 m-4 rounded-md shadow-2xl'>
        Increment
      </button>
      <button onClick={()=>setCount(count+1)} //we can now normally use them as variables
        className='bg-sky-500 p-2 m-4 rounded-md'>
        Decrement
      </button>
    </div>
  )
}
export default Counter
```


# most important note

# note 1
```js
function Comp(){
    // if we trynna use varible from context api inside Comp itself this is not possible
    // becoz to use that varaible we would require  const {count,setCount} = useContext(CounterContext) this shit
    // When you are using useContext(CounterContext) in the Comp component, it's attempting to access the context before it has been provided by the CounterContextProvider
    // so it will be error
    return (
       <CounterContextProvider> 
            <div className='bg-slate-700 text-white h-screen w-screen text-2xl font-bold flex justify-center items-center flex-col'>
            <Header />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            </div>
       </CounterContextProvider>
    )
}
```
# note2

- for creator and provider use use names starting from Capital letters (this shit costed me 1hr)
