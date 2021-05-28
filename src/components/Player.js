import React from 'react'
import Body from './Body'
import Sidebar from  './Sidebar'
import './Player.css'
import Footer from './Footer'

const Player = () => {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body/>

            </div>
            <Footer/>
          
        </div>
    )
}

export default Player