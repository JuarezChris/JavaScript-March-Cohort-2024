import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/username/${username}`)
    }
    
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="">Name</label>
            <input type="text" name="username" value={username} onChange={ (e) => setUsername(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreatePage