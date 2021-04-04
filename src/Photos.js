import React from "react";
import './Photos.css';

export default function Photos(props){
    if (props.photos) {
        return (
            <div className="Photos">
               {props.photos.map(function(photo, index){
                return (
                    <div key={index}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                            <img src={photo.src.tiny}  alt="img" className="img" />
                        </a>
                    </div>
                    );     
            })}
            </div>
        );
       } else {
           return null;
       }
}