import React from "react";
import Synonyms from './Synonyms';

export default function Meaning(props){
    return (
        <div className="Meaning">
             <h3 className="wordType">{props.meaning.partOfSpeech}</h3>
             {props.meaning.definitions.map(function (definition, index)
             {
                 return(
                    <div key={index}>
                        <div className="definition">
                        {definition.definition}
                        <br />
                        <em> " {definition.example} "</em>
                        <Synonyms className="synonyms" synonyms={definition.synonyms} />
                        </div>
                    </div>
                 );
             })}
        </div>
    );
}