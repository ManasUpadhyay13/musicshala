import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router'
import Side_1 from '../../images/gifs/side_1.gif'
import Side_2 from '../../images/gifs/side_2.gif'

function Welcome() {
    const history = useNavigate()
    const signup= (e) =>{
        e.preventDefault()
        history('/signup')
    }

    const login= (e) =>{
        e.preventDefault()
        history('/login')
    }
    return (
        <div className="welcome">
            <div className="w-top">
                <h1 className="heading">MusicShala</h1>
                <p className='text'>not just an ordinary music app</p>
                <img src={Side_1} alt='side' className='side_gif side_1'/>
                <img src={Side_2} alt='side' className='side_gif side_2'/>
            </div>
            <div className="w-bottom">
                <button className="w-sign" onClick={signup}>New here ? SIGN UP</button>
                <button className="w-log" onClick={login}>LOG IN</button>
            </div>
        </div>
    )
}

export default Welcome
