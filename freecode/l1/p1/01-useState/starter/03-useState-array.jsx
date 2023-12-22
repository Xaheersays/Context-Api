import { useState } from "react";
import { data } from "../../src/data";


const UseStateArray = () => {
  const [ppl,setPpl] = useState(data);
  const removeItem = (id)=>{
    const newppl = ppl.filter((person)=>person.id!==id)
    setPpl(newppl)
  }
  const clearItems = ()=>{
    setPpl([])
  }

  return( 
      <>
      <div className="flex flex-col items-center gap-5 p-10 ">

        <div className="flex flex-col items-center gap-5 p-10" >
          {ppl.map((person)=>{
            const {id,name} =person;
            return (
              <div key={id}>
                  <h4 className="text-2xl font-mono">{name.toUpperCase()}</h4>
                  <button className="bg-sky-400 p-2 rounded-lg hover:bg-sky-300 " onClick={()=>removeItem(id)}>Remove</button>
              </div>
            )
          })}
        </div>
        <button className="bg-slate-600 p-4 rounded-lg hover:bg-slate-500" onClick={clearItems}>Clear All</button>
        </div>
      </>
  )
};

export default UseStateArray;
