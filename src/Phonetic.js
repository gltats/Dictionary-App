import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import './Phonetic.css';

export default function Phonetic(props){
   
    return (
        <div className="Phonetic">
        <p className="phoneticText">{props.phonetic.text}</p>
        <ReactAudioPlayer
            src={props.phonetic.audio}
            autoPlay={false}
            controls
            className="phoneticAudio"
            />
        
        
        </div>
    );
} 