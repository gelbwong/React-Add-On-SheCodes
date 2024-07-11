import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>

      <SearchEngine />

      <footer>
        This site was coded by karina, open-sourced on GitHub and hosted on
        Netfily.
      </footer>
    </div>
  );
}

export default App;
