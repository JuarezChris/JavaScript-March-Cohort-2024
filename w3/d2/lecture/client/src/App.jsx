import { useState } from 'react'
import './App.css'
import MovieForm from './components/MovieForm'
import Display from './components/Display'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <>
      <MovieForm movies={movies} setMovies={setMovies}/>
      <Display movies={movies}/>
    </>
  )
}

export default App
