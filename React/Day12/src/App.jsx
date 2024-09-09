import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './Movies'
import Footer from './Footer'
function App() {

  return (
    <>
    <header className='Title'>Marvel Movies</header>
      <div className='Movies'>
        <Movies />
      </div>
      <footer><Footer/></footer>
    </>
  )
}

export default App
