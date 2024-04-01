import { useState } from 'react'  
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [cards, setCards] = useState([])

  return (
    <div>
      <Form cards={cards} setCards={setCards}/>
      <div className='row'>
      {
        cards.map( (item, index) => (
          <Card key={index} cards={cards} setCards={setCards} item={item} position={index}/>
        ))
      }
      </div>
    </div>
  )
}

export default App
