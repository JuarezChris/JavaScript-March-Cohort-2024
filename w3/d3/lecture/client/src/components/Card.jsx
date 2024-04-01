import React from 'react'

const Card = (props) => {
    const { item, position, setCards, cards } = props

    const handleDelete = () => {
        const newCards = cards.filter( (pokePeck, idx) => idx != position )
        console.log(newCards)
        setCards(newCards)
    }

  return (
    <div>
        <div className="card">
            <h2>Name: {item.muscleName}</h2>
            <h2>Health: {item.muscleHealth}</h2>
            <p>Muscle Power: {item.musclePower}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Card