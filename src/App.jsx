import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div style={{height:"100vh"}} className='d-flex flex-column justify-content-center align-items-center bg-dark text-white'>
        <h1>Counter App</h1>
        <Counter/>
      </div>
    </>
  )
}

export default App
