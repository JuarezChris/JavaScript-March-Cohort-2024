import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import magicM from './assets/images/magicM.jpg'
import discoD from './assets/images/discoD.jpg'
import muscleDiglett from './assets/images/muscleDiglett.webp'

function App() {
  const dinos = [
    {
      image: muscleDiglett,
      name: 'Screech',
      diet: 'Potatoes',
      trait: 'Loves pets'
    },
    {
      image: discoD,
      name: 'Yoshi',
      diet: 'Turtle shells',
      trait: 'Loves to Jump'
    },
    {
      image: magicM,
      name: 'Earl',
      diet: 'Vegan',
      trait: 'Tree pusher'
    },
  ]

  return (
    <div className='row'>
      {
        dinos.map( (item) => (
          <Card image={item.image} name={item.name} diet={item.diet} trait={item.trait}/>
        ) )
      }
    </div>
    
    // <div className='row'>
    //   <Card image={dinoScreech} name="Screech" diet="Pancakes" trait="Loves hug"/>
    //   <Card image={discoD} name="Disco Dino" diet="Waffles" trait="Loves to dance"/>
    //   <Card image={magicM} name="Magic Mike" diet="Bacon" trait="Loves to dance and party" />
    // </div>
  )
}

export default App
