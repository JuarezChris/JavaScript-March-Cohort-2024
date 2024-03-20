import { useState } from 'react'
import './App.css'
import Character from './components/Character'

function App() {


  return (
    <>
      <Character fname="Michone" age={30} pwrLvl={18} world="Walking Dead"/>
      <Character fname="Goku" age={50} pwrLvl={9001} world="DBZ"/>
    </>
  )
}

export default App
