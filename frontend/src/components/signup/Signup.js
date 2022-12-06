import React, { useState } from 'react'
import './signup.css'
import Spotify_all_black from '../../images/spotify_all_black.png'
import { Link ,useNavigate} from 'react-router-dom'
function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const sign = async(e) =>{
        e.preventDefault()
        if(name==='' || email==='' || confirmEmail==='' || password===''){
            setErrMsg('Please fill all the fields')
            setInterval(() => {
                setErrMsg('')
            }, 1500);
        }
        else if(!(email===confirmEmail)){
            setErrMsg("Emails don't match")
            setInterval(() => {
                setErrMsg('')
            }, 1500);
        }
        else{
            const submit = await fetch('http://localhost:8080/signup',{
                method : "POST",
                headers : {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                    name ,
                    email,
                    password
                })
            })
            const data =await submit.json()
            if(data.message==='success'){
                navigate('/spotify')
            }
            else{
                setErrMsg(data.message)
                setInterval(() => {
                    setErrMsg('')
                }, 3000);
            }
        }
    }
    return (
        <div className="sign">
            <div className="sign-top">
                <Link to ="/">
                <img src={Spotify_all_black} alt="all_black" className="spotify_all_black" />
                </Link>
                <h1 className="signText">Sign Up for free to start Listening.</h1>
            </div>            
            <div className="forms">
                <p>What's your name ?</p>
                <br />
                <input type="text" placeholder="  Enter your name" className="name" onChange={(e)=> setName(e.target.value)} />
                <br />
                <br />
                
                <p>What's your email ?</p>
                <br />
                <input type="email" placeholder="  Enter your email" className="email" onChange={(e)=> setEmail(e.target.value)} />
                <br />
                <br />

                <p>Confirm your email ?</p>
                <br />
                <input type="email" placeholder="  Confirm your email" className="confirmEmail" onChange={(e)=> setConfirmEmail(e.target.value)} />
                <br />
                <br />

                <p>What's your password ?</p>
                <br />
                <input type="password" placeholder="  Enter your password" className="password" onChange={(e)=> setPassword(e.target.value)} />                
            </div>
            <div className="conditions">
                <p>
                     By clicking on sign-up, you agree to <span className="green">Spotify's Terms and Conditions of Use.</span> 
                     <br /> <br />  <br /> To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's Privacy Policy.
                </p>
            </div>
            <button className="register" onClick={sign}> SIGN UP</button>
            <p className="error">{errMsg}</p>
            <p className="login-p">HAVE AN ACCOUNT ? 
                <Link to="/login">
                <span className="green login"> LOG IN</span>
                </Link>
            </p>
            
        </div>
    )
}

export default Signup
