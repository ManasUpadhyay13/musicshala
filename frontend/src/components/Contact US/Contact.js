import React ,{ useState } from 'react'
import Spotify_white_logo from '../../images/spotify_all_black.png'
import { useNavigate } from 'react-router'
import './contact.css'


function Contact() {
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [problem, setProblem] = useState('')

    const handleSend = (e) => {
        e.preventDefault()
        console.log(name , email , problem)
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

            <div className="contactspotify">
                <input type="text" name="name" className = 'input_name' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                <input type="email" name="email" className="input_email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                <input type="text" name="problem" id="input_problem" onChange={(e) => setProblem(e.target.value)} placeholder='Enter your query / suggestion / problem' />
                <button onClick={handleSend}>SEND</button>
            </div>
        </div>
    )
}

export default Contact
