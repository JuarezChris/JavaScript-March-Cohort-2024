import {React, useState} from 'react'

const Card = (props) => {
    const {name, rep, image} = props

    const [pokeName, setPokeName] = useState(name)
    const [benchReps, setBenchReps] = useState(parseInt(rep))

    const addRep = () => {
        setBenchReps(benchReps + 1)
    }

  return (
    <div>
        <div className="card">
            <img src={image} alt="" />
            <h2>Name: {pokeName}</h2>
            <p>Bench reps: {benchReps}</p>
            <button onClick={addRep} >Rep increase</button>
        </div>
    </div>
  )
}

export default Card