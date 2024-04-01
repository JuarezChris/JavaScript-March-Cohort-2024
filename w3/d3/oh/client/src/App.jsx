import { useState } from 'react'
import './App.css'
import Holiday from './components/Holiday'
import Content from './components/Content'

function App(props) {
  // Use current useState to update the selected holiday 
  // Need to pass this down through props
  const [current, setCurrent] = useState({})
  const [holidays, setHolidays] = useState([
  {
    holiday: "Thanksgiving",
    content: "Happy Turkey Day!",
    // isClicked: false 
  },
  {
    holiday: "Christmas",
    content: "Merry Christmas!!"
  },
  {
    holiday: "New Years",
    content: "Happy New Year!"
  }
  ])

  return (
    <>
    <div>
      <Holiday setCurrent={setCurrent} holiday={holidays[0]}/>
      <Holiday setCurrent={setCurrent} holiday={holidays[1]}/>
      <Holiday setCurrent={setCurrent} holiday={holidays[2]}/>
    </div>
    <div>
      <Content current={current}/>
    </div>
    </>
  )
}

export default App
