import "../../css/style.css"
import axios from "axios"
import React, { useEffect, useState } from 'react'

const Albums = () => {
  const [ album, setAlbun] = useState("")

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=daft_punk")
        console.log(response.data.album)
      }catch(error) {
        console.log(error)
      }      
    }
    fetchAlbum()
  })

  return (
    <div className='albums_container'>
        <h3>Albums</h3>
        <section >

        </section>
    </div>
  )
}

export default Albums