import React from 'react'
import { useParams } from 'react-router-dom'

const Username = () => {
    const { username } = useParams()


  return (
    <div>
        <h2>Username: {username}</h2>
    </div>
  )
}

export default Username