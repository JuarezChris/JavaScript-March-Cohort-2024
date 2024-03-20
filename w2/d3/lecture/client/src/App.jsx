import { useState } from 'react'
import './App.css'
import PokePet from './components/PokePet'

function App() {

  return (
    <div className='container'>
      <PokePet hp={20} hungry={100}/>
    </div>
  )
}

export default App
