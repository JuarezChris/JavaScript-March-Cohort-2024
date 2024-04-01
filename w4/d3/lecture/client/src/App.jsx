import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './views/Homepage'
import Pokedex from './views/Pokedex'
import PokeDets from './views/PokeDets'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Homepage /> }/>
          <Route path="/pokedex" element={ <Pokedex /> }/>
          <Route path="/pokeDets/:pokeName" element={ <PokeDets /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
