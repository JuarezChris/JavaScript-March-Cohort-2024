import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './views/HomePage'
import CreatePage from './views/CreatePage'
import Username from './views/Username'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/create" element={ <CreatePage /> }/>
          <Route path="/username/:username" element={ <Username /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
