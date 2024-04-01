import React from 'react'

const Holiday = (props) => {
    const {holiday, setCurrent} = props

    const handleClick = () => {
      setCurrent(holiday)
    }
    
  return (
    <div>
        <button onClick={handleClick}>{holiday.holiday}</button>
    </div>
  )
}

export default Holiday