import React from 'react'

const Content = (props) => {
  const {current} = props

  return (
    <div>
      <h2>{current.holiday}</h2>
      <p>{current.content}</p>
    </div>
  )
}

export default Content
