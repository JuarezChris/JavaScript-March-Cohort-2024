import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Pokedex = (props) => {
    const navigate = useNavigate()
    const [pokeData, setPokeData] = useState([])

    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
            .then( response => {
                // console.log(response.data.results)
                const data = response.data.results
                const pokeList = data.map( (item, index) => 
                    axios.get(item.url)
                        .then( (res) => ({
                            name: res.data.name,
                            img: res.data.sprites.front_shiny
                        }))
                        .catch( (err) => {
                            console.log(err)
                        })
                )

                Promise.all(pokeList)
                    .then( (pokeArr) => {
                        console.log(pokeArr)
                        setPokeData(pokeArr)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch( error => {
                console.log(error)
            })
    }, [] )

    const pokeDets = (pokeName) => {
        navigate(`/pokeDets/${pokeName}`)
    }

  return (
    <div className='pokedexContainer'>
        {
            pokeData.map( (item, index) => (
                <div className='pokedexCard' key={index}>
                    <h2 onClick={() => pokeDets(item.name)} className='pokeName'>{item.name}</h2>
                    <img className='pokeImg' src={item.img} alt={item.name}/>
                </div>
        ))
        }
    </div>
  )
}

export default Pokedex