import React from 'react'
import { useNavigate } from 'react-router-dom'

const Searchartist = () => {
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/artist")
    }


  return (
    <div className='search_container'>
        <form className='search_form' onSubmit={handleSubmit}>
            <div>
                <label>Search Artist</label>
                <input type="text"/>
            </div>
        <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Searchartist