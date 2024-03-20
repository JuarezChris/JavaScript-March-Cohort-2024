import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import muscleDiglett from './assets/images/muscleDiglett.webp'
import musclePikachu from './assets/images/musclePikachu.webp'
import muscleMagikarp from './assets/images/muscleMagikarp.jpg'

function App() {
  
  return (
    <div className='row'>
      <Card image={muscleDiglett} name="Diglett" rep="0"/>
      <Card image={musclePikachu} name="Pikachu" rep="0"/>
      <Card image={muscleMagikarp} name="Magikarp" rep="0"/>
    </div>
  )
}

export default App
