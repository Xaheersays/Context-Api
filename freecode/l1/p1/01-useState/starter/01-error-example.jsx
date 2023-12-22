import { useEffect, useState } from "react";

const ErrorExample = () => {
  const [count,setCount] = useState(0)
  const handleClick = ()=>{
    setCount((c)=>c+1)
  }
  useEffect(()=>{
      console.log(count)
    },[count])
 
  return (
    <>
    <div className="flex flex-col items-center gap-5 pt-10">
  <h2 className="cnt text-4xl text-center">{count}</h2>
  <button className="bg-sky-400 p-4 hover:outline transition-all hover:bg-sky-600 rounded-lg w-44" onClick={handleClick}>Increase</button>
    </div>
    </>
)};

export default ErrorExample;
