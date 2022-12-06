import React from 'react'
import './about.css'
import Spotify_white_logo from '../../images/spotify_all_black.png'
import { useNavigate } from 'react-router'

function AboutUS() {
    const navigate = useNavigate()
    const home = ()=>{
        navigate('/spotify')
    }

    const aboutUs =() =>{
        navigate('/aboutUs')
    }

    const contactUs = () =>{
        navigate('/contactUS')
    }
    const logout= () =>{
        navigate('/')
    }

    return (
        <div>
            <div className="sidebar">
                <img src={Spotify_white_logo} alt="logo" className="sidebar_logo" />
                <div className="sidebar_options">
                    <p onClick={home}>HOME</p>
                    <p onClick={aboutUs}>ABOUT US</p>
                    <p onClick={contactUs}>CONTACT US</p>
                </div>
                <button className="logut_spotify" onClick={logout}>LOG OUT</button>
            </div> 
            <div className="aboutspotify">
                <h1>MINI PROJECT</h1>
                <br />
                <br />
                <h3> MUSIC SHALA</h3>
                <br />
                <br />
                <br />
                <p>This project made by RITIKA , KHIZRA , MANAS</p>
            </div>
        </div>
    )
}

export default AboutUS
