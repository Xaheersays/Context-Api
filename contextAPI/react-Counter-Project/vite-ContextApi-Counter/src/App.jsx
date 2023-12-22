
import { useContext, useState } from 'react';
import Counter from './Component/Counter';
import CounterContextProvider from './Context/counterContextProvider.jsx';
// import CounterContext from './Context/counterContext.js';
import Header from './Component/Header.jsx';
function App() {
  // const {count} = useContext(CounterContext)
  return (
    <>
      <CounterContextProvider>
        <div className='bg-slate-700 text-white h-screen w-screen text-2xl font-bold flex justify-center items-center flex-col'>
          <Header/>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </CounterContextProvider>
    </>
  );
}

export default App;
