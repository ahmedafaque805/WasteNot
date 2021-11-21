import React from 'react'
import { useHistory } from "react-router-dom";

import Illustration from '../../Assets/illutration.jpg'

const Login = () => {
    const history = useHistory()

    const Onlogin = () => {
        history.push('/home')
    }
    return (
        <div className='Login-container'>
            <div className='left-box'>
                <img src={Illustration} alt='Illustration' draggable='false' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='right-box'>
                <h2>Login</h2>
                <input placeholder='Email' />
                <input placeholder='Password' />
                <button onClick={Onlogin}>Login</button>
            </div>
        </div>
    )
}

export default Login
