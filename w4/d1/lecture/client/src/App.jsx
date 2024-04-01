import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokeData, setPokeData] = useState([])

  useEffect( () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then( response => {
        console.log(response.data.results)
        setPokeData(response.data.results)
      })
      .catch( err => {
        console.log(err)
      })
  }, [] )
  
  return (
    <>
      <h2>Pokemon</h2>
      {/* pokemon names here */}
      {
        pokeData.map( (item, index) => (
          <div>
            <p>{item.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
