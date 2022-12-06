import React ,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Spotify_all_black from '../../images/spotify_all_black.png'
import './login.css'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg , setErrMsg] = useState('')
    const login =  async (e) =>{
        e.preventDefault()
        if(email ==='' || password ===''){
            setErrMsg("Please fill all the fields")
            setInterval(() => {
                setErrMsg('')
            }, 1500);
        }
        else{
            const check = await fetch('http://localhost:8080/login',{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email , 
                    password
                })
            })
            const response = await check.json()
            if(response.message==='success')
            {
                navigate('/spotify')
            }
            else{
                setErrMsg(response.message)
                setInterval(() => {
                    setErrMsg('')
                }, 3500);
            }
        }
    }
    return (
        <div>
            <div className="l">
                <div className="login-top">
                    <Link to="/">
                    <img src={Spotify_all_black} alt="all_black" className="spotify_all_black" />
                    </Link>
                    <h1 className="signText">Log IN for free to start Listening.</h1>
                </div>

                <div className="login-forms">
                    <p>What's your email ?</p>
                    <br />
                    <input type="email" placeholder="  Enter your email" className="name" onChange={(e)=> setEmail(e.target.value)} />
                    <br />
                    <br />
                    <p>What's your password ?</p>
                    <br />
                    <input type="password" placeholder="  Enter your password" className="password" onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <button className="login-submit" onClick={login}>
                    LOG IN
                </button>
                <p className="error_login">{errMsg}</p>
                <p className="sign-p">DON'T HAVE AN ACCOUNT ? 
                <Link to='/signup'>
                <span className="green signn"> SIGN UP</span>
                </Link>
            </p>
            </div>
        </div>
    )
}

export default Login
