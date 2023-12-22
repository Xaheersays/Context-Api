import { useState } from 'react';

const UseStateObject = () => {
  const [name,setName] = useState('peter');
  const [age,setAge]   = useState(29)
  const  [hobby,setHobby] = useState('read books')
  const displayPerson = ()=>{
    setName('jhon')
    setAge(40)
    setHobby('Scream at computer')
  }
  return (
    <>
      <div  className='flex flex-col items-center justify-center gap-4 pt-20'>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{hobby}</h3>
        <button className='bg-sky-400 p-4 rounded-lg' onClick={displayPerson } >
          Show Jhon
        </button>
      </div>
    </>
  )
};

export default UseStateObject;
