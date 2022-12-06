import {  Routes } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Contact from './components/Contact US/Contact';
import AboutUS from './components/About us/AboutUS';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Spotify from './components/spotify/Spotify';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Welcome/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/spotify' element={<Spotify/>}/>
      <Route exact path='/aboutUs' element={<AboutUS/>}/>
      <Route exact path='/contactUs' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
