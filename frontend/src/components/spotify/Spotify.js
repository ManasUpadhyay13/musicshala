import { useState , useEffect } from 'react'
import './spotify.css'
import Spotify_white_logo from '../../images/spotify_all_black.png'
import { useNavigate } from 'react-router'
import SongCard from '../Song Card/SongCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay , faPause, faForward , faBackward } from '@fortawesome/free-solid-svg-icons'
import {Howl, Howler} from 'howler';

function Spotify() {
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

    // all the songs 

    const Songs = 
    [
        {
            id:0,
            src:"https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
            title: "JUSTIN BEIBER | STAY",
            url : '../../music/0.mp3'
        },
        {
            id:1,
            src:"https://i.ytimg.com/vi/kJNk4TW7RAk/maxresdefault.jpg" ,
            title: "RILES | PESETAS"
        },
        {
            id:2,
            src:"https://upload.wikimedia.org/wikipedia/en/f/f3/Wiz_khalifa_black_and_yellow.jpg" ,
            title: " BLACK AND YELLOW"
        },
        {
            id:3,
            src:"https://www.thewittyblog.com/wp-content/uploads/2020/10/tera-hone-laga-hoon-lyrics-e1603449230320.jpg" ,
            title:"TERA HONE LAGA HU" 
        },
        {
            id:4,
            src:"https://i.ytimg.com/vi/2fvw0TkENHM/maxresdefault.jpg" ,
            title: "MOOD"
        },
        {
            id:5,
            src:"https://i.ytimg.com/vi/YRNyamyBOIQ/maxresdefault.jpg" ,
            title: "ASTRONAUT IN THE OCEAN"
        },
        {
            id:6,
            src:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Mast_Magan.jpg/220px-Mast_Magan.jpg" ,
            title: "MAST MAGAN"
        },
        {
            id:7,
            src:"https://i.ytimg.com/vi/cLIQzxgFeNE/maxresdefault.jpg" ,
            title:"NAGADA | RAMLELLA"
        },
        {
            id:8,
            src:"https://www.makemykaraoke.com/images/thumbnails/300/300/product/28/ra_one2.jpg" ,
            title: "DILDARA"
        },
        {
            id:9,
            src:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Alexander_fairytale.jpg/220px-Alexander_fairytale.jpg" ,
            title: "FAIRYTALE"
        },
        {
            id:10,
            src:"https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
            title: "JUSTIN BEIBER | STAY"
        },
        {
            id:11,
            src:"https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
            title: "JUSTIN BEIBER | STAY"
        },
        {
            id:12,
            src:"https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
            title: "JUSTIN BEIBER | STAY"
        },
        {
            id:13,
            src:"https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
            title: "JUSTIN BEIBER | STAY"
        },
        {
            id:14,
            src:"https://m.media-amazon.com/images/M/MV5BYjc4YTk3NDItODUwYi00NmM1LTgxYzQtN2YyMWE2MWU1M2Q4XkEyXkFqcGdeQXVyMjAzMjcxNTE@._V1_.jpg" ,
            title:"THE SEARCH | NF"
        },
        {
            id:15,
            src:"https://i.ytimg.com/vi/Dst9gZkq1a8/maxresdefault.jpg" ,
            title:"GOOSEBUMPS "
        },
        {
            id:16,
            src:"https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/eb/63/fc/eb63fc4c-f36b-5981-a790-8f05c8dd2df1/886449138852.jpg/400x400bb.jpg" ,
            title:"NEED TO KNOW | DOJA CAT" 
        },
        {
            id:17,
            src:"https://i.ytimg.com/vi/PkG8QXChdfo/maxresdefault.jpg" ,
            title:"WISHLIST | DINO JAMES" 
        },
        {
            id:18,
            src:"https://i.ytimg.com/vi/8CdcCD5V-d8/maxresdefault.jpg" ,
            title:"VENOM | EMINEM"
        },
        {
            id:19,
            src:"https://a10.gaanacdn.com/images/albums/51/1506551/crop_480x480_1506551.jpg" ,
            title:"ALL BLACK | RAFTAAR" 
        },
        {
            id:20,
            src:"https://a10.gaanacdn.com/images/albums/12/3537712/crop_480x480_3537712.jpg" ,
            title:"MANN MERA" 
        },
        {
            id:21,
            src:"https://images-puremix.akamaized.net/cache/mixcheck/21/sorry_-_justin_bieber-400.jpg" ,
            title:"SORRY | JUSTIEN BIEBER" 
        },
        {
            id:22,
            src:"https://i1.sndcdn.com/artworks-isHhIG7zKadDoJ9l-dt3kvQ-t500x500.jpg" ,
            title:"PEACHES | JUSTIN BEIBER" 
        },
        {
            id:23,
            src:"https://m.media-amazon.com/images/M/MV5BNzBjYWIzNmQtZjA2NS00ZTMzLThmODQtMGE0MTEzZGE1YTgzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg" ,
            title:"ATTENTION | CHARLIE PUTH" 
        },
        {
            id:24,
            src:"https://pbs.twimg.com/media/D01ohevXcAEwptc.jpg" ,
            title:"DESPACITO REMIX" 
        },
        {
            id:25,
            src:"https://www.makemykaraoke.com/images/detailed/25/Karthik_CK_uff_teri_ada.jpg" ,
            title:"UFF TERI ADA"
        },
        {
            id:26,
            src:"https://i.ytimg.com/vi/OxuVD0AMqlk/maxresdefault.jpg" ,
            title:"SOORAJ DOOBA HAI | ROY" 
        },
        {
            id:27,
            src:"https://i1.sndcdn.com/artworks-isHhIG7zKadDoJ9l-dt3kvQ-t500x500.jpg" ,
            title:"PEACHES | JUSTIN BEIBER" 
        },
        {
            id:28,
            src:"https://upload.wikimedia.org/wikipedia/en/d/d1/Babycoverart.jpg" ,
            title:"BABY | JUSTIN BIEBER" 
        },
        {
            id:29,
            src:"https://m.economictimes.com/thumb/msid-60509133,width-1200,height-900,resizemode-4,imgsize-297705/sex-no-taboo-gracias-despacito.jpg" ,
            title:"DESPACITO | LUIS FONSI " 
        },
        {
            id:30,
            src:"https://i.ytimg.com/vi/v2-9rIL_f4w/maxresdefault.jpg" ,
            title:"UDD GAYE" 
        },
        {
            id:31,
            src:"https://i.ytimg.com/vi/8GYi4n_gHUc/maxresdefault.jpg" ,
            title:"TUM HI HO BANDHU | COCKTAIL" 
        },
        {
            id:32,
            src:"https://i.ytimg.com/vi/46KHDxWZvs0/maxresdefault.jpg" ,
            title:"ALONE | NICO COLLINS" 
        },
        {
            id:33,
            src:"https://www.ilyricshub.com/wp-content/uploads/2021/08/mann-bharrya-2-0-shershaah-b-praak.jpg" ,
            title:"MANN BHARRYAA | SHERSHAAH" 
        },
        {
            id:34,
            src:"https://i1.sndcdn.com/artworks-TTE3TaSifxTRW8By-4Xjrwg-t500x500.jpg" ,
            title:"KYA MUJHE PYAAR HAI" 
        },
        {
            id:35,
            src:"https://i.ytimg.com/vi/uFDTl8ue9Ok/maxresdefault.jpg" ,
            title:"PAL | ARIJIT SINGH" 
        },
        {
            id:36,
            src:"https://sm.mashable.com/mashable_in/article/l/lil-nas-x-/lil-nas-x-is-serving-industry-baby-on-twitter-with-a-heaping_8pcy.jpg" ,
            title: "INDUSTRY BABY"
        },
        {
            id:37,
            src:"https://i.ytimg.com/vi/FOiJKl6EHBk/maxresdefault.jpg" ,
            title:"IT'S YOU | ALI GATIE" 
        },
        {
            id:38,
            src:"https://i.ytimg.com/vi/32XegdA9DBg/maxresdefault.jpg" ,
            title: "MEHARMA"
        },
        {
            id:39,
            src:"https://a10.gaanacdn.com/images/albums/66/3702066/crop_480x480_1609322881_3702066.jpg" ,
            title: "MOONLIGHT"
        }

    ]

    


    const [currentSong, setCurrentSong] = useState(0)

    // var sound;
    // useEffect(() => {
    //     sound = new Howl({
    //         src: Songs[currentSong].url
    //       });      
    //       sound.play()
    //     Howler.volume(1.0)  
    // }, [currentSong])

    // for next song


    const [nextSong, setNextSong] = useState(1)
    
    const handleNextSong = ()=>{
        if((currentSong + 1) > (Songs.length-1)){
            setCurrentSong(0)
            setNextSong(1)
        }
        else if((currentSong + 1) === (Songs.length-1)){
            setNextSong(0)
            setCurrentSong(currentSong+1)
        }
        else{
            setCurrentSong(currentSong+1)
            setNextSong(currentSong+2)
        }
    }

    // for previous song


    const handlePreviousSong = ()=>{
        if((currentSong -1) < 0){
            setCurrentSong(Songs.length-1)
            setNextSong(0)
        }
        else{
            setNextSong(currentSong)
            setCurrentSong(currentSong -1)
        }
    }

    // for player

    const [player , setPlayer]= useState(false)

    const handleplay = () =>{
        if(player === false){
            setPlayer(true)
        }
        else{
            setPlayer(false)
        }
    }

   
    return (
        <>
        <div className="spotify">
            <div className="sidebar">
                <img 
                    src={Spotify_white_logo} alt="logo" className="sidebar_logo" 
                />

                <div className="sidebar_options">
                    <p onClick={home}>HOME</p>
                    <p onClick={aboutUs}>ABOUT US</p>
                    <p onClick={contactUs}>CONTACT US</p>
                </div>

                {/* this is the controls section of the app */}

                <div className="controls">
                    <div className="now-play">
                        <h2>Now playing : </h2>
                        <p>{Songs[currentSong].title}</p>
                    </div>
                    <div className="c-icons">
                        <FontAwesomeIcon icon={faBackward} className='c-controls backwads' onClick={handlePreviousSong} />
                        <FontAwesomeIcon icon={player===false? faPlay : faPause} className="play-pause c-controls" onClick={handleplay} />
                        <FontAwesomeIcon icon={faForward} className='c-controls forwards' onClick={handleNextSong}/>
                    </div>
                    <div className="next">
                        <h3>Next :</h3>
                        <p>{Songs[nextSong].title}</p>
                    </div>
                </div>

                {/* this is for the log out purpose */}


                <button className="logut_spotify" onClick={logout}>LOG OUT</button>
            </div>            


            {/* this is the song card body rendering place where we render the songs */}


            <div className="s_body">

                <div className="songCard">
                    {
                        Songs.map((e)=>{
                            return(
                                <SongCard 
                                    src={e.src} 
                                    title={e.title}
                                    id = {e.id}
                                    setCurrentSong = {setCurrentSong}
                                    setNextSong = {setNextSong}
                                    setPlayer = {setPlayer}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>

    )
}

export default Spotify;
