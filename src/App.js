
import dictionary from './dictionary.jpg';
import './App.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1>Dictionary
        <img src={dictionary} className="dictionaryImg" alt="dictionary"/>
        </h1>
        <SearchEngine />
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
    </div>
  );
}

export default App;
