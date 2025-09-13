import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../css/style.css"
import Albums from '../Albums/albums'

const Library = ({artistName}) => {
    const [albums, setAlbums] = useState([])
    const [ song, setSongs ] = useState([])
    const [error, setError] = useState(null)
    //console.log(artistName)

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=" + artistName)
                                
                if(!response.data.artists){
                   setError("Artist not found")
                }
                setAlbums(response.data.artists) 

            }catch (error){
              setError(error)
            }
            
        }        
        fetchAlbums()      
    },[])


  return (
    <>
        <div className='container_library'>        
            <section className='band_container'>            
                {   error? (
                    <p>{error}</p>
                ): (
                    albums.map((album) => {
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
                    })
                )             
                }             
            </section>        
        </div>
        <Albums/>
    </>
  )
}

export default Library