import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../../css/style.css"
import Albums from '../Albums/albums'

const Library = ({artistName}) => {
    const [artists, setArtists] = useState([])
    const [ song, setSongs ] = useState([])
    const [error, setError] = useState(null)
    //console.log(artistName)

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await axios.get("https://www.theaudiodb.com/api/v1/json/123/search.php?s=" + artistName)
                                
                if(!response.data.artists){
                   setArtists([]) 
                   setError("Artist not found")
                }else {
                    setArtists(response.data.artists)
                    setError(null) 
                }

            }catch (error){
              setError(error)
            }
            
        }        
        fetchArtist()      
    },[artistName])


  return (
    <>
        <div className='container_library'>        
            <section className='band_container'>            
                {   error? (
                    <p>{error}</p>
                ): (
                    artists.map((artist) => {
                        const { strArtist, 
                                idArtist, 
                                intBornYear, 
                                strArtistLogo, 
                                strBiographyES, 
                                strArtistBanner, strStyle } = artist
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
        {artists.length > 0  && (
        <Albums artistName={artistName} />
      )}
        
    </>
  )
}

export default Library