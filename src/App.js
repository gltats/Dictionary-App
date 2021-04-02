
import dictionary from './dictionary.jpg';
import './App.css';import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dictionary
        <img src={dictionary} className="dictionaryImg" alt="dictionary"/>
        </h1>

        <p>
          This page is under development, please come back later
          <Loader
      className="loader"
        type="Watch"
        color="#00BFFF"
        height={100}
        width={100} 
      />
        </p>
        
      </header>

      <footer>
        <hr />
        <a href="https://github.com/gltats/Dictionary-App"
         target="_blank" rel="noreferrer">
          Open-source code
        </a>
          {" "}by Tatiana Gomes
        <br />
        Vector created by{" "}
        <a href='https://www.freepik.es/vectores/escuela'> pch.vector - www.freepik.es</a>
      </footer>
      
    </div>
  );
}

export default App;
