import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../css/style.css"

const Library = ({artistName}) => {
    const [albums, setAlbums] = useState([])
    console.log(artistName)

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=daft_punk")
                setAlbums(response.data.artists)
                console.log(response.data)
            }catch (error){
                console.log(error)
            }
        }        
        fetchAlbums()
    },[])


  return (
    <div className='container_library'>
        
        <section className='band_container'>            
            {albums.map((album) => {
                const { strArtist, 
                        idArtist, 
                        intBornYear, 
                        strArtistLogo, 
                        strBiographyES, 
                        strArtistBanner, strStyle } = album
                return(
                    <article key={idArtist}>
                        <div className='container_logo'>
                            <img className='band_banner' src={strArtistBanner}/>
                            <img className='band_logo' alt='' src={strArtistLogo}/>
                        </div>
                        <h2>{strArtist}</h2 >
                        <p><b>Date born:</b>   {intBornYear}</p>                                                
                        <p><b>Style:</b> {strStyle}</p>
                    </article>
                )
            })}
             
        </section>
    </div>
  )
}

export default Library