import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='text-center text-4xl font-mono font-bold p-5 bg-slate-600 border shadow-2xl w-screen z-1000 fixed s'>Amazon's Best Seller Books</h1>
    <div className='  items-center justify-center flex w-100 flex-wrap gap-2' >
    <App />
    </div>
  </React.StrictMode>,
)
