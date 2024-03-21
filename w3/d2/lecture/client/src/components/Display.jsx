import React from 'react'

const Display = (props) => {
    const {movies} = props

  return (
    <div>
        {
            movies.map( (item, index) => (
                <div key={index}>
                    <h2>Title: {item.title}</h2>
                    <p>Genre: {item.genre}</p>
                    <p>Description: {item.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Display