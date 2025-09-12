import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../css/style.css"
const Library = () => {
    const [albums, setAlbums] = useState([])
    

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=daft_punk")
                setAlbums(response.data.artists)
                console.log(response)
            }catch (error){
                console.log(error)
            }
        }        
        fetchAlbums()
    },[])


  return (
    <div className='container_library'>
        <h2>Band</h2>
        <section className='band_container'>            
            {albums.map((album) => {
                const { strArtist, idArtist, intBornYear, strArtistLogo, strBiographyES } = album
                return(
                    <article key={idArtist}>
                        <img className='band_logo' alt='' src={strArtistLogo}/>
                        <h3>{strArtist}</h3>
                        <p>{intBornYear}</p>                        
                        <p className='biograph'>{strBiographyES}</p>
                    </article>
                )
            })}
             
        </section>
    </div>
  )
}

export default Library