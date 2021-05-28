import React from 'react'
import './SongRow.css'

const SongRow = ({ track }) => {
    console.log('track')
    return (
        <div className="songrow">
            <img src={track.album.images[0].url} className="songrow__album" alt="" />
            <div className="songrow__info">
            <h1>{track.name}</h1> 
            <p className="songrow_album">
                {track.artists.map((artist)=>
                    artist.name).join(',')} -{" "}
                {track.album.name}
            </p>
            </div>
        </div>
    )
}

export default SongRow 
