import React from 'react';
import { data } from '../../src/data.js';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className='flex flex-col items-center gap-5 pt-10'>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='flex  flex-col gap-2'>
            <h4 className='text-center text-2xl'>{name.toUpperCase()}</h4>
            <button class="bg-sky-800 p-4 rounded-lg" onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className='bg-slate-500 p-4  rounded-lg shadow-inner'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
