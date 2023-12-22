import { memo, useState } from "react";

const Thrid = memo((props)=>{
    let  {handleClick} =  props;
    const [count,setCount] = useState(0);
    let startTime = performance.now() 
    while(performance.now()-startTime<800){}

    const increment = ()=>{
        
        setCount((prev)=>prev+1)
        handleClick?.()
    }
    return (
        <>
            <p>i am super slow third comp</p>
            <br />
            <p>third comp count : <span className="bg-green-300 p-2 text-black">{count}</span> </p>
            <button onClick={increment} className="bg-sky-500 p-4 rounded-lg" >third comp count ++</button>
        </>
    )

})
export default Thrid