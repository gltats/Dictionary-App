import React from "react";
import './Meaning.css';

export default function Synonyns(props) {
   if (props.synonyms) {
    return (
        <div>
        <h4>Synonyms:</h4>
        <ul className="Synonyms">
        {props.synonyms.map(function(synonym, index){
            return(
                <li key={index}>
                {synonym}
                </li>
            )
        })}
        </ul>
        </div>
    );
   } else {
       return null;
   }
}