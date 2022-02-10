import React from 'react'
import './SongRow.css'
function SongRow({ track, playSong}){
    return(
        <div className="songrow" onClick={()=> playSong(track.id)}>
            <img className="songrowalbum" src={track.album.images[0].url} alt="" />
            <div className="songrowinfo">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist)=>artist.name).join(", ")}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;