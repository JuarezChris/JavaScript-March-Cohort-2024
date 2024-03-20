import React from 'react'

const Card = (props) => {
    const {name, diet, trait, image} = props

  return (
    <div>
        <div className="card">
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <p>Diet: {diet}</p>
            <p>Trait: {trait}</p>
        </div>
    </div>
  )
}

export default Card