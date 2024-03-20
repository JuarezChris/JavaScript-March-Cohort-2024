import { useState } from 'react'
import './App.css'

function App() {
  const [results, setResults] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.word.value)
    // const finalResult = isPali(e.target.word.value)
    setResults( () => isPali(e.target.word.value))
  }

  const isPali = word => [...word].reverse().join("") == word? true : false

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter Palidrome</label>
          </div>
          <div>
              <input type="text" name="word" />
          </div>
          <button>Submit</button>
        </form>
        <div>
            <h2>results: 
              {
                results? "Yes is Palidrome" : "No try again"
              }
              </h2>
        </div>
      </div>
    </>
  )
}

export default App
