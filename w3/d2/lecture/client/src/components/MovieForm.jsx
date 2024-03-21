import {React, useState} from 'react'

const MovieForm = (props) => {
    const {movies, setMovies} = props
    // const [title, setTitle] = useState("")
    // const [genre, setGenre] = useState("")
    // const [description, setDescription] = useState("")
    const [movie, setMovie] = useState({
        title: "",
        genre: "",
        description: ""
    })
    // const [movies, setMovies] = useState([])
    const [errors, setErrors] = useState({
        title: "",
        genre: "",
        description: ""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies([...movies, movie])
        setMovie({
            title: "",
            genre: "",
            description: ""
        })
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.value.length <= 2){
            setErrors({...errors, [e.target.name]: "Title must be more than 2 characters!"})
        }
        else {
            setErrors({
                title: "",
                genre: "",
                description: ""
            })
        }
        setMovie({...movie, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type="text" name="title" value={movie.title} onChange={handleChange}/>
                {errors.title}
            </div>
            <div>
                <label>Genre: </label>
                <input type="text" name="genre" value={movie.genre} onChange={handleChange}/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={movie.description} onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>

        {/* {
            movies.map( (item, index) => (
                <div key={index}>
                    <h2>Title: {item.title}</h2>
                    <p>Genre: {item.genre}</p>
                    <p>Description: {item.description}</p>
                </div>
            ) )
        } */}
    </div>
  )
}

export default MovieForm