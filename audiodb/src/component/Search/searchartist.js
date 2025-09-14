import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchartist = ( {sendPrompt} ) => {
    const navigate = useNavigate()

    const [textInput, setTextInput] = useState("")
  
    const handleInputChange = (e) => {
        try {
            setTextInput(e.target.value) // solo texto, no objeto
        }
        catch(error){ console.log("Falla")}
    }

    const handleSubmit = (e) => {
        e.preventDefault()   
        sendPrompt(textInput)
        navigate("/artist")
    }

  return (
    <div className='search_container'>
        <form className='search_form' onSubmit={handleSubmit}>
            <div>
                <label className='search_label'>Search Artist</label>
                <input name="search" 
                    type="text"
                    className="search_input"
                    placeholder="Search Artist by Name"
                    required
                    onChange={handleInputChange}/>
            </div>
        <button className='search_button' type="submit" >Search</button>
        </form>
    </div>
  )
}

export default Searchartist