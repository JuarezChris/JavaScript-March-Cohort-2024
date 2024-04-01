import {React, useState} from 'react'

const Form = (props) => {
    const { cards, setCards} = props
    const [pokePeck, setPokePeck] = useState({
        muscleName: "",
        musclePower: 0,
        muscleHealth: 0
    })

    const handleChange = (e) => {
        setPokePeck({...pokePeck, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCards([...cards, pokePeck])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Muscle Name: </label>
                <input type="text" name="muscleName" value={pokePeck.muscleName} onChange={handleChange}/>
            </div>
            <div>
                <label>Muscle Power: </label>
                <input type="number" name="musclePower" value={pokePeck.musclePower} onChange={handleChange}/>
            </div>
            <div>
                <label>Muscle Health: </label>
                <input type="number" name="muscleHealth" value={pokePeck.muscleHealth} onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form