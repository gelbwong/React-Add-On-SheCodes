import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>

      <main>
        <SearchEngine defaultWord="frog" />
      </main>

      <footer>
        This site was coded by{" "}
        <a
          href="https://www.linkedin.com/in/karina-wong-7a0652221/"
          target="_blank"
          rel="noreferrer"
        >
          Karina
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/gelbwong/React-Add-On-SheCodes"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-shecodes-add-on.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netfily
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
