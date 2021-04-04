import React, { useState } from "react";
import axios from "axios";
import './SearchEngine.css';
import Results from './Results';
import Photos from './Photos';

export default function SearchEngine(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(event){
        event.preventDefault();
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001ef6b9bfe5a4345fdbd204f578a692536";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}` }
        
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div>
         <section className="SearchEngine">
            <form onSubmit={search}> 
                <input type="search" onChange=
                {handleKeywordChange}  placeholder="Add a word" className="SearchEngineForm" />
                {"  "}
                 <button className="SearchEngineForm"  type="button" onClick={search}>Search</button>
            </form>
            <div className="exampleWords">i.e. abnegation, anachronistic, ascetic...</div>
         </section>
         <section className="overlay">
            <div className="row">
                <div className="col-9">
                    <Results results={results} />
                </div>
                <div className="col-2">
                     <Photos photos={photos} />
                </div>  
            </div>
        </section>
        </div>

        );
}