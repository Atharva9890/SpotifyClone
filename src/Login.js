import React from 'react';
import './Login.css';
import n from './slogo.png';
import { loginUrl } from './spotify1';
function Login(){
    return(
            <div className="login">
                <img src={n} alt=""></img>
                <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </div>
    )
}

export default Login