import React from 'react'
import { loginUrl } from '../spotify'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
          
                <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="spotify logo" />
      
            <a href={loginUrl} >Login with spotify</a>

        </div>
            
    
    )
}

export default Login
