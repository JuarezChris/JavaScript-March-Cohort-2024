import {React, useState} from 'react'

const MovieForm = () => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [description, setDescription] = useState("")
    const [movies, setMovies] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newMovie = {title, genre, description}
        setMovies([...movies, newMovie])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Genre: </label>
                <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>

        {
            movies.map( (item, index) => (
                <div key={index}>
                    <h2>Title: {item.title}</h2>
                    <p>Genre: {item.genre}</p>
                    <p>Description: {item.description}</p>
                </div>
            ) )
        }
    </div>
  )
}

export default MovieForm