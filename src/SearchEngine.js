import React, { useState } from "react";
import axios from "axios";
import './SearchEngine.css';

export default function SearchEngine(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="SearchEngine">
            <form onSubmit={search}> 
                <input type="search" onChange=
                {handleKeywordChange}  placeholder="Add a word" className="SearchEngineForm" />
                {"  "}
                 <button className="SearchEngineForm"  type="button" onClick={search}>Search</button>
            </form>
            <p className="exampleWords">i.e. abnegation, anachronistic, ascetic...</p>
        </div>
        );
}