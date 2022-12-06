import './songCard.css'
import React  from 'react'

export default function Song_card (props) {
    const handle=() => {
        props.setCurrentSong(props.id)
        if(props.id === 39){
            props.setNextSong(0)
        }
        else{
            props.setNextSong(props.id + 1)
        }
        props.setPlayer(true)
    }
    return (
        <div className="song_card" onClick={handle}>
            <div className="song_card_img">
                <img src={props.src} alt="music_cover"/>
            </div>
            <div className="song_card_song_title">{props.title}</div>
        </div>
    )
}