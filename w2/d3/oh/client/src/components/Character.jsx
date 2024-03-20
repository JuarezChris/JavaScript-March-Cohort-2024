import {React, useState} from 'react'

const Character = (props) => {
    const {fname, age, world, pwrLvl}  = props

    const [character, setCharacter] = useState({...props})
    // const [character, setCharacter] = useState({fname,age, world, pwrLvl})
    // To long and messy
    // const [fname, setFName] = useState(fname)
    // const [age, setFName] = useState(fname)
    // const [world, setFName] = useState(fname)
    // const [pwrLvl, setFName] = useState(fname)

  return (
    <div>
        <h2>Name: {character.fname}</h2>
        <p>Age: {character.age}</p>
        <p>Power Lvl: {character.pwrLvl}</p>
        <p>World: {character.world}</p>
        <button onClick={() => setCharacter({...Character, [pwrLvl]: pwrLvl + 1 })}>Takes senzu bean</button>
    </div>
  )
}

export default Character