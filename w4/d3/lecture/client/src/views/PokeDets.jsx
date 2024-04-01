import {React, useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

const PokeDets = (props) => {
    const { pokeName } = useParams()
    const [pokemon, setPokemon] = useState({
        name: "",
        img: ""
    })
    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then( response => {
                console.log(response)
                setPokemon({
                    name: response.data.name,
                    img: response.data.sprites.front_shiny
                })
            })
            .catch( error => {
                console.log(error)
            })
    }, [] )
    // https://pokeapi.co/api/v2/pokemon/pokeName

  return (
    <div>
<div className='pokeDetsContainer'>
        <div className='pokeDetsCard'>
            <h2 className='pokeDetsName'>{pokemon.name}</h2>
            <img className='pokeDetsImg' src={pokemon.img} alt={pokemon.name} />
        </div>
    </div>
    </div>
  )
}

export default PokeDets