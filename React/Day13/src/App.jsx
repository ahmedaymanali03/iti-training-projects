import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies'

function App() {

  return (
    <>
    <header className='Title'> Movies</header>
      <div className='Movies'>
        <Movies />
      </div>
    
    </>
  )
}

export default App
