import React from "react";
import Meaning from './Meaning';
import Phonetic from './Phonetic';
import Loader from "react-loader-spinner";
import './Results.css';

export default function Results(props) {
   if (props.results) {
    return (
        <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){
                return (
                <div key={index}>
                 <Phonetic phonetic={phonetic} />   
                </div>
                );
            })}
            {props.results.meanings.map(function(meaning, index){
                return (
                <div key={index}>
                 <Meaning meaning={meaning} />   
                </div>
                );
            })}
        </div>
    );
   } else {
       return (
           <div className="info">
               <h3>Waiting any <br />English word!😊</h3>
               <Loader
                  className="loader"
                    type="Watch"
                    color="#00BFFF"
                    height={70}
                    width={100} 
            />
           </div>
           );
   }
}
   